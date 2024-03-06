import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
function Memberships(){
    const memberships = [{
        userType: "Single User",
        price: "149",
        storage: "500 GB",
        usersNumber: "1",
        dataSending: "2 GB",
        image: Single

    },
    {
              userType: "Partnership",
              price: "199",
        storage: "1 TB",
        usersNumber: "3",
        dataSending: "2 TB",
        image: Double
    },
    {
         userType: "Group Account",
         price: "299",
        storage: "5 TB",
        usersNumber: "10",
        dataSending: "20 TB",
        image: Triple
    }        
    ]
    return(
        <div className="bg-white w-full py-40 px-4">
            <div className="max-w-[1240px] grid md:grid-cols-3 mx-auto gap-8">
                {memberships.map((membersip, index) => (
                        <div key={index} className={
                            `w-full flex flex-col text-center justify-center mx-auto shadow-xl rounded-lg hover:scale-105 duration-300 my-4 md:my-0 ${index === 1 ? "my-10 md:my-[-12px]" : ""}`
                        }>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src={membersip.image} alt='/'/>
                    <h2 className='text-2xl font-bold py-8'>{membersip.userType}</h2>
                    <p className='text-4xl font-bold'>${membersip.price}</p>
                    <div>
                        <p className='py-2 border-b mx-8 mt-8'>{membersip.storage} Storage</p>
                        <p className='py-2 border-b mx-8'>{membersip.usersNumber} Users Allowed</p>
                        <p className='py-2 border-b mx-8'>Send up to {membersip.storage}</p>
                    </div>
                    <button className={`btn-primary ${index === 1 ? 'bg-black text-[#00df9a]' : ''}`}>Start Trial</button>
                </div>
                ))}
            
               
            </div>
        </div>
    )
}

export default Memberships