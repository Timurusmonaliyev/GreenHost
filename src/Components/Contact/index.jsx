import React from 'react'

const Contact = () => {
  return (
    <div className='text-left px-14 text-[#AAAAAA]'>
      <div className="grid gap-3">
        <p className="text-[34px] font-medium text-[#00BAF2] pt-2"> Contact Us</p>
        <p className='text-xs'>In ac libero urna. Suspendisse sed odio ut mi auctor blandit. Duis luctus nulla metus, a vulputate mauris. Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero. Cras purus libero, dapibus nec rutrum in, dapibus nec risus. Ut interdum mi sit amet magna feugiat auctor.</p>
      </div>
      <div className='pt-10 grid gap-2'>
        <p className='text-[20px] font-medium text-[#00BAF2]'>
          Our Location
        </p>
        <p className='text-[14px] font-medium text-[#00BAF2]'> Mailing Address</p>
        <p className='w-64 ] text-[13px] pb-6 leading-5'>120-330 Vitae urna blandit est egestas,Pulvinar sit amet convallis eget, Lorem ipsum dolor</p>
        <p className='text-xs text-[#AAAAAA]'> Tel: 020-060-6600 <br />
          Fax: 020-030-7990
        </p>
      </div>
      <div>
        <p className='text-[20px] font-medium text-[#00BAF2] pt-8 py-2'> Quick Contact</p>
        <form action="" className='grid gap-1'>
          <div className='grid w-72'>
            <label htmlFor=""> Name:</label>
            <input type="text" className='bg-[#1b1b1b]' />
          </div>
          <div className='grid w-72'>
            <label htmlFor=""> Email:</label>
            <input type="text" className='bg-[#1b1b1b]' />
          </div>
          <div className='grid w-72'>
            <label htmlFor=""> Phone:</label>
            <input type="text" className='bg-[#1b1b1b]' />
          </div>
          <div className='grid w-96'>
            <label htmlFor=""> Message:</label>
            <textarea name=" " className='bg-[#1b1b1b]' id="" cols="30" rows="10"></textarea>
            <div className='flex gap-28'>
              <button className=' bg-[#1b1b1b] my-4 py-1 px-2 border border-black font-semibold text-[16px] mb-10 font-sans'> Send</button>
              <button className=' bg-[#1b1b1b] my-4 py-1 px-2 border border-black font-semibold text-[16px] mb-10 font-sans' > Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact