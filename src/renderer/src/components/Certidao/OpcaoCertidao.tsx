import { Field } from 'formik'


export const OpcaoCertidao = ()=>{

  return(
    <>
      <div className="btn-group p-0 w-auto" role="group" aria-label="Basic radio toggle button group">
        <Field
          type="radio" name='OpcaoCertidao' value="Nova" id='OpcaoNova' autoComplete="off"
          className="btn-check"
        />
        <label className="btn btn-outline-primary align-content-center " htmlFor='OpcaoNova' >
          Nova
        </label>

        <Field
          type="radio" name='OpcaoCertidao' value="Antiga" id='OpcaoAntiga'
          autoComplete="off" className="btn-check"
        />
        <label className="btn btn-outline-primary align-content-center" htmlFor='OpcaoAntiga'>
          Antiga
        </label>
      </div>

    </>
  )
}