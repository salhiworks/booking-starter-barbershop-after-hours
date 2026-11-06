import { isDefault, useContent } from '../lib/content';
import { Picture } from './Picture';
import { SectionHead } from './SectionHead';

/**
 * The team, as a cast list. A barber's portrait appears once the owner adds
 * it; until then the profile is words only — never a stand-in photo. The
 * sample profiles say they are samples.
 */
export function Barbers() {
  const content = useContent();
  const { values } = content;
  const samples = isDefault(content, 'team.members');
  const members = values['team.members'];

  return (
    <section className="cast" id="barbers" aria-labelledby="team-title">
      <div className="wrap">
        <SectionHead title={values['team.title']} titleId="team-title" lede={values['team.lede']}>
          {samples ? <p className="tag">Sample profiles · placeholders until the shop adds its team</p> : null}
        </SectionHead>
        <ul className="cast__list">
          {members.map((member, index) => {
            const portrait = member.photo ?? null;
            return (
              <li className={`member${portrait ? ' member--photo' : ''}`} key={`${member.name}-${index}`}>
                {portrait ? (
                  <div className="frame frame--card member__photo">
                    <Picture image={portrait} sizes="(min-width: 720px) 120px, 96px" />
                  </div>
                ) : null}
                <div className="member__who">
                  <h3 className="member__name">{member.name}</h3>
                  {member.role ? <p className="member__role">{member.role}</p> : null}
                </div>
                {member.bio ? <p className="member__bio">{member.bio}</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
