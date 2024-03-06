import Laptop from '../assets/laptop.jpg'
function Analytics(){
    return(
        <div className="w-full bg-white py-16 px-4">
             <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold text-lg'>DATA ANALITYCS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:3xl text-2xl font-bold'>Manage Data Analytics Centrally</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className='bg-black text-[#00df9a] btn-primary md:mx-0'>Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics