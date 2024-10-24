import GroupsTable from './groupsTable'
import CreateGroupButton from './createGroupButton'

function BodyHome({ currentUser }) {
    return (
        <section className="body-home">
            <div className="groups">
                <h3>
                    Groups
                </h3>
                <CreateGroupButton className="create-group-button"/>
            </div>

            <div>
                <GroupsTable currentUser={currentUser}/>
            </div>
        </section>
    )
}

export default BodyHome;