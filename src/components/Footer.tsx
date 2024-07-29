import Image from "next/image";

 export default function Footer(){
    return (
        <>
        <section className="flex flex-col bg-[#98D8AA]  p-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap lg:items-center -m-6">
      <div className="w-full md:w-auto p-6">
        <Image src="https://dummyimage.com/60x60" alt="" width={0} height={0}/>
      </div>
      <div className="w-full md:w-1/2 p-2">
        <ul className="">

        <li className="p-1"><a className="font-heading text-base text-black hover:text-gray-200" href="/about">About Us</a></li>
        <li className="p-1"><a className="font-heading text-base text-black hover:text-gray-200" href="/contact-us">Contact Us</a></li>
        <li className="p-1"><a className="font-heading text-base text-black hover:text-gray-200" href="/cancelation-policy">Cancellation Policy</a></li>
        <li className="p-1"><a className="font-heading text-base text-black hover:text-gray-200" href="/ourteam">Our Team</a></li>

         
         
        </ul>
      </div>
      <div className="w-auto md:ml-auto p-6">
        <div className="flex flex-wrap items-center -m-1.5">
           
          <div className="w-auto p-1.5">
            <h3 className="font-heading font-bold  text-lg text-black">Contact Us:</h3> 
            <h3 className="font-heading font-medium  text-base text-black"> <a href="mailto:ambitiousacademyadp@gmail.com">ambitiousacademyadp@gmail.com</a></h3>
            <h3 className="font-heading font-medium  text-base text-black"><a href="tel:+919238834569">+919238834569</a></h3>
            <h3 className="font-heading font-medium  text-base  text-black"><a href="https://www.linkedin.com/in/taa-the-ambitious-academy-7092b8317/" target="blank">TAA(The Ambitious Academy)</a></h3>
            <h3 className="font-heading font-medium  text-base text-black"><a href="https://www.instagram.com/taa__._?igsh=cHk2YjkyZGRyZmI3" target="blank"></a>ambitiousacademy_edu</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="py-9">
      <div className="border-b border-gray-800"></div>
    </div>
    <div className="flex flex-wrap items-center justify-between -m-6">
      <div className="w-auto p-6">
        <p className="text-sm text-black">© Copyright 2022. All Rights Reserved by theambitiousacademy.</p>
      </div>
      <div className="w-auto p-6">
        <div className="flex flex-wrap -m-6">
          <div className="w-auto p-6"><a className="text-black hover:text-gray-400 text-sm" href="/privacy-policy">Privacy Policy</a></div>
          <div className="w-auto p-6"><a className="text-black hover:text-gray-400 text-sm" href="/terms-and-conditions">Terms & Conditions</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}