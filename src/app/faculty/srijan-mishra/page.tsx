const Faculty = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 border-double border-4 rounded-2xl border-orange-600" >
       
        <h1 className="text-4xl font-bold mb-4">Dr. Srijan Mishra
        </h1>
        <section className="mb-6">
       {/* < img 
          src='' 
          alt="Faculty Image" 
          className="object-cover h-40 w-50 rounded-lg"
        /> */}
        </section>
        <section className="mb-6 " >
            <li className="mb-2">
              <strong>Professional Experience:</strong>
              <ul className="list-decimal ml-20 mb-4 list-outside" >
                <li>
                Extensive experience in both government and private sectors in various capacities.
                </li>
                </ul>
                </li>
            <li className="mb-2">
              <strong>Mooting and Legal Education:</strong>
              <ul className="list-decimal ml-20 mb-4 list-outside" >
                <li>
                Seasoned mooter with participation in numerous national and international competitions.
                </li>
                <li>
                Judge at several national and international mooting competitions.  
              </li>
              <li>
              Contributor to legal education through training aspiring lawyers for various exams and international competitions.
              </li>
              </ul>
              </li>
            <li className="mb-2">
              <strong>Research and Publications:</strong>
              <ul className="list-decimal ml-16 list-inside" >
              <li className="mb-2">
              Authored and presented several research papers in national and international journals.
              </li>
                </ul>
                </li>
                <li className="mb-2">
              <strong>Additional Roles:</strong>
              <ul className="list-decimal ml-16 list-inside" >
              <li className="mb-2">
              Mooting Advocacy Head at the Maldives Moot Court Society.
              </li>
                </ul>
                </li>
                <li className="mb-2">
              <strong>Areas of Expertise:</strong>
              <ul className="list-decimal ml-16 list-inside" >
              <li className="mb-2">
              Intellectual Property Rights.
              </li>
              <li className="mb-2">
              Telecommunication
             </li>
              <li className="mb-2">
              Energy.
              </li>
              <li className="mb-2">
              Alternative Dispute Resolution (ADR).
              </li>
                </ul>
                </li>
              <p><strong>Dr. Srijan Mishra is a distinguished legal professional known for his expertise in multiple legal domains and his significant contributions to legal education and research. His experience in mooting and his role in mentoring future legal professionals highlight his dedication to the field.
              </strong></p>
        </section>
      </div>
    );
  };
  
  export default Faculty;  