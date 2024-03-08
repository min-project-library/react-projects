import styles from "../styles/githubprofilefinder.module.css"

function User(props){
    
    const createdDate = new Date(props.userData.created_at)
    return(
        <div className={styles.userContainer}>
            <div>
                <img src={props.userData.avatar_url} className={styles.imgStyle}/>
            </div>
            <div className={styles.profile}>
                <h3>{props.userData.name} | {props.userData.login}</h3>
                <p>Github Url: <a href={`https://github.com/${props.userData.login}`}>{`https://github.com/${props.userData.login}`}</a></p>
            </div>
            <div className={styles.profileInfo}>
                <h4>Profile Info</h4>
                <p>User join date: {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {month: "short", })} ${createdDate.getFullYear()}`}</p>
                <p>Public Repos: {props.userData.public_repos}</p>
                <p>Followers: {props.userData.followers}</p>
                
            </div>
            
            
            
        </div>
    )
}

export default User