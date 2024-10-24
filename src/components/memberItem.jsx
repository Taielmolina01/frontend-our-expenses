function MemberItem({name, link}) {
    return (
        <li>
            <a href={link} target="_blank">
                <i className="fab fa-github"></i>
            </a>
            <p>{name}</p>
        </li>
    )
}

export default MemberItem;