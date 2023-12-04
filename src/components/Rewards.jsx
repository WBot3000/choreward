import React, { useState } from 'react'

const tempItems = [
    {
      id: 1,
      text: 'Ice-cream',
      points:500,
    //   trashIcon: <FaClock />,
    //  viewButton: <button>Redeem</button>,
    },
    {
      id: 2,
      text: 'Video Game',
      points:2500,
    //   trashIcon:     <FaClock />,
    //  viewButton: <button>Redeem</button>,
    }
    ,
    {
      id: 3,
      text: 'New Shoes',
      points:2000,
    //   trashIcon:     <FaClock />,
    //  viewButton: <button>Redeem</button>,
    },
];

//TODO: Once proper user data is obtained, remove the passed isFamilyHead prop, since it's just for testing purposes right now
function Rewards({isFamilyHead}) {

    const [currentRewards, setCurrentRewards] = useState(tempItems);
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [newRewardTextField, setNewRewardTextField] = useState("");
    const [newRewardPointsField, setNewRewardPointsField] = useState("1"); //Because when using a form, numbers are stored as text

    //TODO: (For all updating functions) Field validation and XSS protection
    //TODO: Update on backend too
    function addReward(event) {
        event.preventDefault();
        try {
            //TODO: Backend update code
            const newRewards = [...currentRewards];
            newRewards.push({
                id: newRewardTextField + newRewardPointsField + (currentRewards.length+1), //TODO: Get this from DynamoDB instead of this weird stuff
                text: newRewardTextField,
                points: newRewardPointsField
            })
            setCurrentRewards(newRewards);
            setNewRewardTextField("");
            setNewRewardPointsField("1");
        }
        catch(e) {
            //TODO: Error catching code
        }
    }

    //TODO: Update on backend too
    //Index is needed so that the component knows which list item in the display needs to be altered. Same logic for deleteReward.
    function updateReward(event, indexOfItem, newText, newPoints) {
        event.preventDefault();
        try {
            //TODO: Backend update code
            //NOTE: If we're fetching rewards directly instead of passing them, and we end up using React-Query, then a refetch() might just be the best option
            const newRewards = []
            for(let i = 0; i < currentRewards.length; i++) {
                if(i == indexOfItem) {
                    const updatedReward = {
                        id: currentRewards[i].id,
                        text: newText,
                        points: Number(newPoints),
                    }
                    newRewards.push(updatedReward)
                }
                else {
                    newRewards.push(currentRewards[i])
                }
            }
            setCurrentRewards(newRewards);
        }
        catch(e) {
            //TODO: Error catching code
        }
    }

    //TODO: Update on backend too
    function deleteReward(event, indexOfItem) {
        event.preventDefault();
        try {
            //TODO: Backend update code
            //NOTE: If we're fetching rewards directly instead of passing them, and we end up using React-Query, then a refetch() might just be the best option
            const newRewards = []
            for(let i = 0; i < currentRewards.length; i++) {
                if(i != indexOfItem) {
                    newRewards.push(currentRewards[i])
                }
            }
            setCurrentRewards(newRewards);
        }
        catch(e) {
            //TODO: Error catching code
        }
    }


    //TODO: Indicate if saving data has been successful
    function RewardBox({ id, index, text, points }) {
        const [textField, setTextField] = useState(text);
        const [pointsField, setPointsField] = useState(points);

        return <article>
            <div className="flex justify-center items-center pt-10 pl-10">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        {!isBeingEdited && <>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{text}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{points} points</p>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Redeem</button>
                        </>}
                        {isBeingEdited && <form className='flex flex-col w-fit gap-y-2'>
                            <label className="font-bold" htmlFor='reward_name'>Reward Name</label>
                            <input type="text" name="reward_name" value={textField}
                                onChange={e => {setTextField(e.target.value)}}/>
                            <label className="font-bold" htmlFor='reward_points'># of Points Needed</label>
                            <input type="number" name="reward_points" min="1" value={pointsField}
                                onChange={e => {setPointsField(e.target.value)}}/>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800ml-4" 
                                onClick={(e) => {updateReward(e, index, textField, pointsField)}}>Save Changes</button>
                            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800ml-4" 
                                onClick={(e) => {deleteReward(e, index)}}>Delete Reward</button>
                        </form>}
                    </div>
                </a>
            </div>
        </article>
    }
 
    return (
        <div>
            <h2 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white ml-10 mt-10">Rewards</h2>
            {isFamilyHead && 
                <div className="flex ml-10 mt-10 justify-left">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => {setIsBeingEdited(!isBeingEdited)}}>{isBeingEdited ? "Finish Editing": "Edit Rewards"}</button>
                </div>
            }
            <div className="flex pb-40">
                {currentRewards.map((item, idx) => <RewardBox key={item.id} index={idx} id={item.id} text={item.text} points={item.points}/>)}
                {isBeingEdited &&
                    <article>
                        <div className="flex justify-center items-center pt-10 pl-10">
                            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5>Add New Reward</h5>
                                    <form className='flex flex-col w-fit gap-y-2'>
                                        <label className="font-bold" htmlFor='new_reward_name'>Reward Name</label>
                                        <input type="text" name="new_reward_name" value={newRewardTextField}
                                            onChange={e => {setNewRewardTextField(e.target.value)}}/>
                                        <label className="font-bold" htmlFor='new_reward_points'># of Points Needed</label>
                                        <input type="number" name="new_reward_points" min="1" value={newRewardPointsField}
                                            onChange={e => {setNewRewardPointsField(e.target.value)}}/>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800ml-4" 
                                            onClick={(e) => {addReward(e)}}>Add</button>
                                    </form>
                                </div>
                            </a>
                        </div>
                    </article>
                }
            </div>
        </div>
    )
}

export default Rewards
