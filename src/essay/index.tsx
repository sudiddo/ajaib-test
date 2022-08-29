import React from "react";

function Essay() {
  const lists = [
    {
      id: 1,
      questions:
        "Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword",
      answer: (
        <p>
          Answer: <br />
          Everything in OOP is an object, almost everything. OOP has Four
          concept.
          <br />
          Encapsulation, Exponse only necessary details to the user of the
          class.
          <br />
          Abstraction, Hiding the data. <br />
          Inheritance, Code reusability. <br />
          Polymorphism, Create a class with more than one form, or we could say
          that classes have the same methods but different implementations.
          <br />
          <br />
          Meanwhile this keyword refers to an object and new keyword refers to
          create an instance of the class.
        </p>
      ),
    },
    {
      id: 2,
      questions:
        "What is the new class syntax and how to create instance methods, class methods?",
      answer: (
        <div className="w-full flex flex-col items-start">
          <p className="mb-5">
            Class syntax is a special function that we can define the function
            expressions and the declarations. It have two components which class
            expressions and class declarations.
            <br />
            How to create instance and declare class?
          </p>
          <iframe
            title="question-2"
            src="https://carbon.now.sh/embed?bg=rgba%28195%2C171%2C171%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Sample%250ANew%2520Variable%250Alet%2520name%253B%250Alet%2520grade%253B%250A%250ADeclare%2520Class%250Afunction%2520Course%28name%252C%2520grade%29%2520%257B%250A%2520%2520this.name%2520%253D%2520name%253B%250A%2520%2520this.grade%2520%253D%2520grade%253B%250A%257D%250A%250A%252F%252F%2520Create%2520Instance%250Alet%2520course1%2520%253D%2520new%2520Course%28%25E2%2580%259CMath%25E2%2580%259D%252C%252085%29%253B%250A"
            className="w-full h-[500px]"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      ),
    },
    {
      id: 3,
      questions:
        "Give an example of how to implement inheritance in ES2015 using extends and super ",
      answer: (
        <>
          <iframe
            title="inheritance"
            src="https://carbon.now.sh/embed?bg=rgba%28195%2C171%2C171%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=class%2520Animal%2520%257B%250A%2520%2520%2520%2520constructor%28legs%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520this.legs%2520%253D%2520legs%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520walk%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520console.log%28%27walking%2520on%2520%27%2520%252B%2520this.legs%2520%252B%2520%27%2520legs%27%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%250Aclass%2520Bird%2520extends%2520Animal%2520%257B%250A%2520%2520%2520%2520constructor%28legs%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520super%28legs%29%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520fly%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520console.log%28%27flying%27%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%250A%250Alet%2520bird%2520%253D%2520new%2520Bird%282%29%253B%250A%250Abird.walk%28%29%253B%250Abird.fly%28%29%253B"
            className="w-full h-[650px]"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </>
      ),
    },
    {
      id: 4,
      questions:
        "Imagine refactoring an ES5 application to use ES2015, how would you go about it? ",
      answer: (
        <>
          <iframe
            title="refactoring"
            src="https://carbon.now.sh/embed?bg=rgba%28195%2C171%2C171%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520sample%2520array%250A%250Alet%2520animals%2520%253D%2520%255B%250A%257B%2520name%253A%2520%25E2%2580%2598dog%25E2%2580%2599%252C%2520legs%253A%25204%257D%252C%250A%257B%2520name%253A%2520%25E2%2580%2598cat%25E2%2580%2599%252C%2520legs%253A%25204%257D%252C%250A%257B%2520name%253A%2520%25E2%2580%2598humans%25E2%2580%2599%252C%2520legs%253A%25202%257D%252C%250A%255D%250A%250A%252F%252F%2520ES5%2520Sample%2520code%253A%250Avar%2520twoLeggedAnimals%2520%253D%2520animals.filter%28function%28animal%29%2520%257B%250Areturn%2520animal.legs%2520%253D%253D%253D%25202%253B%250A%257D%29.map%28function%28animal%29%2520%257B%250Areturn%2520animal.name%253B%250A%257D%250A%250A%252F%252F%2520ES6%2520or%2520ES2015%2520code%250Avar%2520twoLeggedAnimals%2520%253D%2520animals.filter%28animal%2520%253D%253E%2520animal.legs%2520%253D%253D%253D%25202%29.map%28animal%2520%253D%253E%2520animal.name%29%250A"
            className="w-full lg:h-[650px]"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </>
      ),
    },
    {
      id: 5,
      questions:
        "Give an example of how you structure applications with design patterns using closure and modules Example using closure",
      answer: (
        <div className="overflow-y-hidden">
          <p className="mb-5">Closures</p>
          <iframe
            title="closure"
            src="https://carbon.now.sh/embed?bg=rgba%28195%2C171%2C171%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520We%2520use%2520a%2520immediately%2520invoked%2520function%2520to%2520create%250A%252F%252F%2520a%2520private%2520variable%2520counter%250Avar%2520counterIncrementer%2520%253D%2520%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520let%2520counter%2520%253D%25200%253B%250A%2520%2520%2520%2520return%2520function%28%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520%252B%252Bcounter%253B%250A%2520%2520%2520%2520%257D%253B%250A%257D%29%28%29%253B%2520%252F%252F%2520these%2520%28%29%2520in%2520the%2520end%2520make%2520this%2520a%2520immediately%2520invoked%2520function%250A%250A%252F%252F%2520prints%253A%25201%250Aconsole.log%28counterIncrementer%28%29%29%253B%250A%252F%252F%2520prints%253A%25202%250Aconsole.log%28counterIncrementer%28%29%29%253B%250A%252F%252F%2520prints%253A%25203%250Aconsole.log%28counterIncrementer%28%29%29%253B"
            className="w-full h-[600px] overflow-y-hidden"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
          <p className="mb-5">Modules</p>

          <iframe
            title="modules"
            src="https://carbon.now.sh/embed?bg=rgba%28195%2C171%2C171%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520We%2520write%2520the%2520whole%2520logic%2520as%2520private%2520members%250A%252F%252F%2520and%2520expose%2520an%2520anonymous%2520object%2520that%2520maps%2520the%250A%252F%252F%2520methods%2520we%2520want%2520as%2520their%2520public%2520counterparts%250Alet%2520fruitsCollection%2520%253D%2520%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%252F%252F%2520private%250A%2520%2520%2520%2520let%2520objects%2520%253D%2520%255B%255D%253B%250A%2520%250A%2520%2520%2520%2520const%2520addObject%2520%253D%2520%28object%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520objects.push%28object%29%253B%250A%2520%2520%2520%2520%257D%250A%2520%250A%2520%2520%2520%2520const%2520removeObject%2520%253D%2520%28object%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520let%2520index%2520%253D%2520objects.indexOf%28object%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28index%2520%253E%253D%25200%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520objects.splice%28index%252C%25201%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%250A%2520%2520%2520%2520const%2520getObjects%2520%253D%2520%28%29%2520%253D%253E%2520JSON.parse%28JSON.stringify%28objects%29%29%250A%2520%250A%2520%2520%2520%2520%252F%252F%2520public%250A%2520%2520%2520%2520return%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520addName%253A%2520addObject%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520removeName%253A%2520removeObject%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520getNames%253A%2520getObjects%250A%2520%2520%2520%2520%257D%253B%250A%257D%29%28%29%253B%250A%2520%250AfruitsCollection.addName%28%2522Bob%2522%29%253B%250AfruitsCollection.addName%28%2522Alice%2522%29%253B%250AfruitsCollection.addName%28%2522Frank%2522%29%253B%250A%2520%250A%252F%252F%2520prints%253A%2520%255B%2522Bob%2522%252C%2520%2522Alice%2522%252C%2520%2522Frank%2522%255D%250Aconsole.log%28namesCollection.getNames%28%29%29%253B%250A%2520%250AnamesCollection.removeName%28%2522Alice%2522%29%253B%250A%2520%250A%252F%252F%2520prints%253A%2520%255B%2522Bob%2522%252C%2520%2522Frank%2522%255D%250Aconsole.log%28namesCollection.getNames%28%29%29%253B"
            className="w-full h-[600px]"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      ),
    },
    {
      id: 6,
      questions:
        "What are your preferred ways of testing your web application? ",
      answer: (
        <p className="lg:w-[729px]">
          I prefer to test my web app through storybook, beside we will have
          components documentation we also will have clean-room environment for
          testing components in isolation.
        </p>
      ),
    },
    {
      id: 7,
      questions:
        "Which web server do you use? Why? Explain pros and cons of your choice. ",
      answer: (
        <p className="lg:w-[729px]">
          I love to explore NGINX, because it’s lightweight and offer best
          scability
          <br />
          <br />
          Pros:
          <li className="mt-3">More lightweight</li>
          <li>requires fewer resources / memory</li>
          <li className="mb-3">
            Better at handling static content Better scalability Recommended for
            sites running on a VPS
          </li>
          Cons:
          <li className="mt-3">Less community support</li>
          <li>Less extensive list of modules</li>
        </p>
      ),
    },
    {
      id: 8,
      questions: "What is your preferred production deployment process? ",
      answer: (
        <p className="lg:w-[729px]">
          Agile software deployment, because it adopt continuous delivery,
          rollback strategy, we can monitor our KPI.
        </p>
      ),
    },
    {
      id: 9,
      questions: "Give an example of clean README.md documentation.",
      answer: (
        <p>
          Clean read me should have at least:
          <li className="mt-3">Project Title </li>
          <li>Description</li>
          <li>How to install and run the project</li>
          <li>How to use the project</li>
          <li>
            dont forget to include credits add license to let the dev what they
            can and cannot do in the project include testing
          </li>
        </p>
      ),
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-black flex flex-col text-white p-10 lg:p-20 overflow-y-scroll">
      <h1 className="text-[40px]">Essay</h1>
      {lists.map(({ id, answer, questions }) => (
        <div key={id} className="pt-10 flex flex-row">
          <p className="text-[24px] mr-5">{id}.</p>
          <div>
            <p className="text-[24px] w-full lg:w-[720px]">{questions}</p>
            <div className="mt-5 text-[16px]">{answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Essay;
