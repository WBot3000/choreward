import Modal from './Modal'
import { useState } from 'react';

const users = [
    {
        id: "1",
        username: "User1"
    },
    { 
        id: "2",
        username: "User2"
    }, 
    {
        id: "3",
        username: "SuperDuperUltraMasterfullyLongUSERNameLol!"
    }, 
    {
        id: "4",
        username: "User4"
}]

//This'll probably become the basis for the Portal Modal
function FamilyManagementModal({ isOpen, onClose }) {

    const [inviteUsername, setInviteUsername] = useState("")
    const [inviteStatusMsg, setInviteStatusMsg] = useState(null)
    const [members, setMembers] = useState(users);
    const [promptedToKick, setPromptedToKick] = useState(null); //The user that is being prompted to kick

    //Component that contains a current member of the family, and the option to kick them if need be
    function UserListItem({ user, showKickPrompt }) {
        return <li>
            <span className='flex gap-x-10'>
                <p className="font-semibold">{user.username}</p>
                <button onClick={() => {setPromptedToKick(user)}}>Remove User</button>
            </span>
            {showKickPrompt &&
                <div>
                    <p>Do you want to kick {user.username}?</p>
                    <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" 
                        onClick={() => {kickMember((user))}}>KICK</button>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
                        onClick={() => {setPromptedToKick(null)}}>Nevermind</button>
                </div>
            }
        </li>;
    }

    //TODO: Actually send the invite. Include check to see if the user exists.
    function sendInvite(event) {
        event.preventDefault();
        const fixedUsername = inviteUsername.trim()
        if(!fixedUsername) {
            setInviteStatusMsg("Please enter a username")
        }
        else {
            setInviteStatusMsg("Invite sent to " + fixedUsername);
        } 
    }

    //TODO: Kick the member on the backend too
    function kickMember(memberToKick) {
        const newMemberList = [];
        for(let member of members) {
            if(member != memberToKick) {
                newMemberList.push(member);
            }
        }
        setPromptedToKick(null);
        setMembers(newMemberList);
        console.log(memberToKick.username + " has been kicked from this family");
    }

    //Responsible for closing the modal. Don't just want to use the passed prop, as we also need to nullify all the appropriate fields
    function closeModal() {
        setInviteUsername("");
        setInviteStatusMsg(null);
        setPromptedToKick(null);
        onClose();
    }

    return <Modal title="Manage Family" isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold">Add New User</h2>
        <form>
            <input type="text" name="inv_username"
                onChange={e => {setInviteUsername(e.target.value)}}/>
            <button className='ml-4' onClick={(e) => {sendInvite(e)}}>Send Invite</button>
        </form>
        {inviteStatusMsg !== null &&
            <p>{inviteStatusMsg}</p>
        }
        <h2 className="text-xl font-bold">Current Users</h2>
        <ul className='flex flex-col gap-y-5 overflow-y-scroll'>
            {members.map(u => <UserListItem key={u.id} user={u} showKickPrompt={u === promptedToKick}/>)}
            {members.length == 0 && <li>No family members. Add some here!</li>}
        </ul>
    </Modal>
}

export default FamilyManagementModal;