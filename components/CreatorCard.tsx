// components/CreatorCard.tsx
import type { Creator } from "@/data/mockDb";

type CreatorCardProps = {
  creator: Creator;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  const followerCount = creator.followers.length;

  return (
    <div className="creator-card">
      <div className="creator-card__inner">
        <div className="creator-card__header">
          <div>
            <div className="creator-card__name">{creator.name}</div>
            <p className="creator-card__email">{creator.email}</p>
          </div>
          <span className="creator-card__category-pill">
            {creator.category || "Creator"}
          </span>
        </div>

        <div className="creator-card__meta">
          <span>
            <span className="creator-card__meta-dot" /> {followerCount} Follower
          </span>
          <span>• SaaS Account aktiv</span>
        </div>

        <div>
          <div className="creator-card__followers-title">Follower</div>
          {followerCount === 0 ? (
            <p className="creator-card__followers-empty">
              Noch keine Follower eingetragen – perfekter Zeitpunkt für den
              ersten Launch. 🚀
            </p>
          ) : (
            <ul className="follower-list">
              {creator.followers.map((follower, index) => (
                <li key={index} className="follower-list__item">
                  <div>
                    <span className="follower-list__name">{follower.name}</span>{" "}
                    <span className="follower-list__goal">
                      – {follower.goal}
                    </span>
                  </div>
                  <span className="follower-list__level">{follower.level}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
