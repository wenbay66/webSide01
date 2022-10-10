import { clients } from "../constants";

const Clients = () => (
  <section className='flex justify-center items-center my-4'>
    <div className='flex justify-center items-center flex-wrap w-full'>
      {clients.map((client) => (
        <div key={client.id} className='flex-1 flex justify-center items-center min-w-[120px] sm:min-w-[192px] m-5'>
          <img src={client.logo} alt="client_logo" className='w-[100px] sm:w-[192px] object-contain' />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
