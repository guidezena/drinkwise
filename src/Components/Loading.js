import "../Styles/loading.css";
import loading from '../img/loading1.svg'

function Loading() {
    return (
        <div className='loader_container'>
            <img className='loader' src={loading} alt = "loading"/>
        </div>
    )


}

export default Loading