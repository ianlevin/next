export default function Contacto() {
  return (
    <div>
      <form>
        <ul>
          <li>
            <p>Escriba su numero de celular</p>
            <input type="text" placeholder="11 2345 4567"/>
          </li>
          <li>
            <p>Escriba su correo electronico</p>
            <input type="text" placeholder="xxxx@gmail.com"/>
          </li>
          <li>
            <p>Escriba su consulta</p>
            <input type="text" size="6" placeholder="Consulta"/>
          </li>
        </ul>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};