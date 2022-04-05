// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <div>
          <p className="team--card-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
