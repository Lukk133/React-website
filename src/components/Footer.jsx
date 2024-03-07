import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

function Footer(){
    const footerData = [
        {
            title: 'Solutions',
            items: ['Analytics', 'Marketing', 'Commerce', 'Insights']
        },
        {
            title: 'Support',
            items: ['Pricing', 'Documentation', 'Guides', 'API Status']
        },
        {
            title: 'Company',
            items: ['About', 'Blog', 'Jobs', 'Careers']
        },
        {
            title: 'Legal',
            items: ['Claim', 'Policy', 'Terms']
        }
    ];

    return(
        <div className='mx-auto px-4 pt-16 py-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='text-3xl font-bold text-[#00df9a]'>React.</h1>
                <p className='py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <div className='flex justify-between md:w-[75%] my-4'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                {footerData.map((section) =>(
                    <div key={section.title}>
         <h6 className='font-medium text-gray-400'>{section.title}</h6>
             <ul>
            {section.items.map((item) =>(
                <li key={item} className='py-2 text-sm'>{item}</li>
            ))} 
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Footer