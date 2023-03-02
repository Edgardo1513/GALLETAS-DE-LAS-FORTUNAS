

const Phrases = ({ dataFrases }) => {    
    
    return(
        <div>               
        <p className="phrases">{ dataFrases.phrase } <br /> Author: { dataFrases.author} </p> 
        
        </div>
    )
}

export default Phrases