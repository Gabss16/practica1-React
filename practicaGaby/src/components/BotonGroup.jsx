import './Boton.css'
const BotonGroup =({b1,b2,b3})=>{


    



    return (
        <>
         <div class="btn-group" role="group" aria-label="Basic example">
         <button type="button" class="btn btn-primary">{b1}</button>
         <button type="button" class="btn btn-primary">{b2}</button>
         <button type="button" class="btn btn-primary">{b3}</button>
         </div>
          
        </>
      )
}
export default BotonGroup;