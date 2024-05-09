
import { useEffect, useState } from 'react';
import Pulse from 'react-awesome-reveal';
import { Cards } from './Cards';



const Service = () => {
    const [Data, setData] = useState([])
    const [toggle, serToggle] = useState(true)

    useEffect(() => {
        fetch('/public/service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div >

            <Pulse>
                <h1 className="text-4xl font-bold text-center italic my-24" > Services</h1 >
            </Pulse>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-2  lg:w-4/5 mx-auto'>
                {
                    toggle ? Data.slice(0, 6).map(item => <Cards key={item.id}
                        item={item}></Cards>)
                        :
                        Data.map(item => <Cards key={item.id}
                            item={item}></Cards>)
                }
            </div>
            <div className="text-center my-9 ">
                <button onClick={() => serToggle(!toggle)} className="btn shadow-lg bg-[#F7E4BC] hover:bg-[#F7E4BC]">{toggle ? "SEE MORE" : "SEE LESS"}</button>
            </div>


        </div >
    );
};

export default Service;