"use client";
import React, { useEffect, useState } from "react";
import RatingStars from "./RatingStars";
import { useUser } from '@clerk/nextjs';

type Comment = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
};

export default function FakeComments({ productId }: { productId: number | string }) {
  const { user } = useUser();
  const key = `comments:${productId}`;
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState<number>(5);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed: Comment[] = JSON.parse(raw);
        // filter out any seeded/fake comments (legacy)
        const filtered = parsed.filter((c) => {
          if (!c || !c.id) return false;
          const isSeedId = String(c.id).startsWith('seed-');
          const seedNames = ['Alex', 'Marie'];
          const isSeedName = seedNames.includes(c.name || '');
          // Only keep comments that have a userId (real purchasers) and are not legacy seeds
          const hasUserId = Boolean((c as any).userId);
          return hasUserId && !(isSeedId || isSeedName);
        });
        if (filtered.length !== parsed.length) {
          // overwrite stored comments to remove seeds
          try { localStorage.setItem(key, JSON.stringify(filtered)); } catch (e) {}
        }
        setComments(filtered);
      } else {
        setComments([]); // no fake seeds, real-only
      }
    } catch (e) {
      setComments([]);
    }
  }, [key]);

  function save(list: Comment[]) {
    setComments(list);
    try {
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) {}
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // enforce purchase check before allowing submit
    try {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const bought = orders.find((o: any) => o.userId === (user?.id || null) && Array.isArray(o.items) && o.items.find((it: any) => it.id === Number(productId)));
      if (!bought) {
        alert('Vous devez avoir acheté ce produit pour laisser un avis.');
        return;
      }
    } catch (e) {
      alert('Impossible de vérifier vos commandes.');
      return;
    }

    const c: Comment & { userId?: string } = {
      id: `${Date.now()}`,
      name: name || user?.fullName || 'Anonyme',
      rating,
      text: text || "(sans commentaire)",
      date: new Date().toISOString(),
      userId: user?.id || undefined,
    };
    save([c, ...comments]);
    setName("");
    setText("");
    setRating(5);
  }

  return (
    <div style={{ marginTop: 32 }} className="card">
      <div style={{ padding: 16 }}>
        <h3 style={{ marginBottom: 8 }}>Avis et notes</h3>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, marginBottom: 12 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'inherit' }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RatingStars rating={rating} editable onChange={(r) => setRating(r)} />
            </div>
          </div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Votre avis" rows={3} style={{ padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'inherit' }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" className="btn btn-primary">Poster l'avis</button>
            <button type="button" className="btn btn-secondary" onClick={() => { setName(''); setText(''); setRating(5); }}>Annuler</button>
          </div>
        </form>

        {!user?.id && (
          <div style={{ marginTop: 8, color: 'var(--text-muted)' }}>Connectez-vous pour laisser un avis.</div>
        )}

        <div style={{ display: 'grid', gap: 12 }}>
          {comments.map((c) => (
            <div key={c.id} style={{ borderRadius: 8, padding: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <div style={{ fontWeight: 700 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{new Date(c.date).toLocaleString()}</div>
              </div>
              <div style={{ marginBottom: 8 }}><RatingStars rating={c.rating} /></div>
              <div style={{ color: 'var(--text-muted)' }}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
