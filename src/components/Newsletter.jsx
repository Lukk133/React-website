
function Newsletter(){
    
    return(
        <div className="w-full px-4 py-16 text-white flex-col">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-5">
                   <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">Want tips & tricks to optimize your flow?</h1>
                   <p>Sign up to our newsletter and stay up to date.</p>
                 </div>
                 <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md" type="email" placeholder="Enter Email"/>
                        <button className="btn-primary sm:ml-4 ">Notify me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-[#00df9a]  underline-offset-2">Privacy Policy</span></p>
                 </div>
            </div>
        </div>
    )
}

export default Newsletter;