const InputsColors = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline  text-center">Elegí tu Color</h1>
      <br />
      <div className="text-center">
        <p>#36D399</p>
        <input type="checkbox" className="toggle toggle-success" />
        <p>#FBBD23</p>
        <input type="checkbox" className="toggle toggle-warning" />
        <p>#3ABFF8</p>
        <input type="checkbox" className="toggle toggle-info" />
        <p>#F87272</p>
        <input type="checkbox" className="toggle toggle-error" />
      </div>
    </>
  )
}
export default InputsColors