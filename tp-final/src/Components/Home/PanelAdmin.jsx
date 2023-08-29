import React from "react";
import AdminOptiones from './AdminOpciones';
import UsuarioOptiones from './UsuariosOpciones';

const PanelAdmin = ({ userRole }) => {
  return (
    <div className="dashboard">
      
      {userRole === 'admin' ? <AdminOptiones /> : <UsuarioOptiones />}
    </div>
  );
};

export default PanelAdmin;