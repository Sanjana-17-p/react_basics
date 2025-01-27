import React from 'react'

function Content(props) {

    //another way to pass the props is -
    // function Content({btn,text,btn2,text2}).
    // console.log(props.someObj)
    // console.log(props)

  return (
    <div>
          <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-200 mt-6 mb-3"> YouTube </h2>
              <p class="leading-relaxed text-base">{props.text}</p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">{props.btn}</button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-200 mt-6 mb-3">Instagram</h2>
              <p class="leading-relaxed text-base">{props.text2}</p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">{props.btn2}</button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Content
