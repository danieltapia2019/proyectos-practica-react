import FormRow from "./FormRow";
import React,{Component} from "react";
//this.refs.nombreComponente.nombreMetodo
class Form extends Component{
    constructor(){
        super();
        this.onSubmit= this.onSubmit.bind(this)
    }
  
    onSubmit(e){
        e.preventDefault();
        alert("Exito!!")
    }
    render(){
        return(
            <div>
                <h2>Registro</h2>
                <form onSubmit={this.onSubmit}>
                    <FormRow inputType="text" labelText="Nombre" ref="nombre" isRequired={true}/>
                    <FormRow inputType="text" labelText="Apellido" ref="apellido" isRequired={true}/>
                    <FormRow inputType="email" labelText="Correo Electronico" ref="email" isRequired={true}/>
                    <FormRow inputType="password" labelText="Contraseña" ref="password" isRequired={true}/>
                    <FormRow inputType="password" labelText="Confirmar Contraseña" ref="confPassword" isRequired={true}/>
                    <button >Registrar</button>
                </form>
                
            </div>
        )
    }
}

export default Form;