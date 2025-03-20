
const Collapse =({boton,texto})=>{


    



    return (
        <>
          <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    {boton}
  </button>
</p>
<div style={{minHeight: "120px"}}>
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style={{width: "300px"}}>
      {texto}
    </div>
  </div>
</div>
          
        </>
      )
}
export default Collapse;