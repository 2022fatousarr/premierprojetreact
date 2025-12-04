
import Button from "../parties/button";

export default function footer() {
  return (
    <footer className='bg-blue-950 text-white text-center p-6 mt-24  '>
        <div>

            <p>Skilline</p>
        <div className="border"></div>
            <p>Virtual Class <br />for Zoom</p>
        
       </div>

      <div>
        <p>Subcribe to get our Newsletter</p>

        <Button
        text="Subscribe"
        className="bg-blue-600"
        />
      </div>
       

    </footer>
  )
}
