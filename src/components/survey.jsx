import { run } from "tripetto-runner-autoscroll";
import Services from "tripetto-services";
import { useEffect } from 'react';

export const Survey = (props) => {
  const style = {
    position: 'relative',
    height: '70%'
  }

  const { snapshot, attachments, onSubmit, onPause } = Services.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVCsxYmpxM3BZMmFTSFhDWGI5WlQvaDM4UkM2UWptclVYUmpneDJMcmZycz0iLCJkZWZpbml0aW9uIjoiOUhvWXN1K1FCL3FPWjJ2MDIzTGNFMC9uM1FtYkc1dTNHT0VvY2loMUV3TT0iLCJ0eXBlIjoiY29sbGVjdCJ9.TBem8dHQPdQG16eo2OYGI9j7Aeyw5wPBr4FiEdRD96Q" });

  function form() {
      run({
        element: document.getElementById("form"), /* Or supply your own element here */
        definition: {"name":"Pet Homeward","language":"zh","clusters":[{"id":"d3fe8dad1b4ac4d8e80c70fa22c75a51e6c835ff7bb209f4cb861313ea6fe112","name":"Question 1","nodes":[{"id":"851b719488e76385c8853d143df5194ad1c34067ff9512c316da31f50d7dca30","disabled":false,"name":"Are we right for you?","nameVisible":true,"description":"What is your current situation?","slots":[{"id":"af239ed60567461a77eed67e5df81439f87afd938804bdfc04485bd3a89d74b8","type":"string","kind":"static","reference":"choice","label":"Choice"}],"block":{"type":"tripetto-block-multiple-choice","version":"3.2.0","choices":[{"id":"49243c4855a3f99d815e8c7d36b932dce62261dbd3a860e72809379e36d6fade","name":"Choice 1"},{"id":"fe992dc607259be16fe716c498d2253937ae0ff8e4fa87ce568bb8255d161163","name":"Choice 2"},{"id":"2f74a8f3483d523bd76df1e10d68883d9c446fe2cd438805f01b839109dcabb2","name":"Choice 3"}]}}],"branches":[{"id":"e0a16c6615dbe6b2a1e948a080c93f324be3f1469880e13b07d6e65eab85d5c0","name":"Choice 1 Result","clusters":[{"id":"9aa6ca46fcce206e148270d9721a7124b276924629d5e5fe0176f85df7c38501","name":"Display Choice 1 Result","nodes":[{"id":"504dfb055c6d4ff756db602621e1d87fba2d32fa5d517115cc62bdea940949ee","name":"You do not need this service, your situation is not severe.","nameVisible":true}]}],"conditions":[{"id":"db3faf2d143a7b1cdaccbe0d15b9a9a0d64b48f58fad6b4328ee948208f900d8","block":{"choice":"49243c4855a3f99d815e8c7d36b932dce62261dbd3a860e72809379e36d6fade","type":"tripetto-block-multiple-choice","version":"3.2.0","node":"851b719488e76385c8853d143df5194ad1c34067ff9512c316da31f50d7dca30","slot":"af239ed60567461a77eed67e5df81439f87afd938804bdfc04485bd3a89d74b8"}}]},{"id":"bdc8771c9d1b1c3c1dbb295f21977484c4e49ac54145309c7ed1a670671678d2","name":"Choice 2 Result","clusters":[{"id":"648d39560dfc22de3d36af18fc4c8cd2ba8158e93ab7a4686044d6d686d71f1b","name":"Display Choice 2 Result","nodes":[{"id":"f82b98a1508c9fa206217bfc953a9ff2171fce3f02edf535059cd94970e1c373","name":"You may need this service. Contact us to set up a consultation.","nameVisible":true}]}],"conditions":[{"id":"eb31b0dae42e35131a5dca8a3704bc0fb2ecae98c361a014a43f16a6b44726c2","block":{"choice":"fe992dc607259be16fe716c498d2253937ae0ff8e4fa87ce568bb8255d161163","type":"tripetto-block-multiple-choice","version":"3.2.0","node":"851b719488e76385c8853d143df5194ad1c34067ff9512c316da31f50d7dca30","slot":"af239ed60567461a77eed67e5df81439f87afd938804bdfc04485bd3a89d74b8"}}]},{"id":"ffa179dace064c75d771abbebb4a171b734d8b2b4928913789fa38e967e207a0","name":"Choice 3 Result","clusters":[{"id":"83f3a8da0253a56dbff2e3894ddbfd6a1670f013e3bace194b8a7c2454687227","name":"Display Choice 3 Result","nodes":[{"id":"4141a061c815d694b8f10c5af28ea32134a45ef88f81458395825529c84cf4d9","name":"You definitely need this service. Please schedule time for a consultation and appointment.","nameVisible":true}]}],"conditions":[{"id":"822bee967c6e139edbc9f943fe44e2f5382047f6f65174c64bf564b892ad415c","block":{"choice":"2f74a8f3483d523bd76df1e10d68883d9c446fe2cd438805f01b839109dcabb2","type":"tripetto-block-multiple-choice","version":"3.2.0","node":"851b719488e76385c8853d143df5194ad1c34067ff9512c316da31f50d7dca30","slot":"af239ed60567461a77eed67e5df81439f87afd938804bdfc04485bd3a89d74b8"}}]}]}],"builder":{"name":"tripetto","version":"3.10.3"}},
        styles: {"direction":"vertical","verticalAlignment":"middle","hidePast":false,"hideUpcoming":false,"showNavigation":"auto","showProgressbar":true,"showEnumerators":false,"autoFocus":false,"showSeparateSubmit":true,"showPreviousButton":true,"showScrollbar":false,"noBranding":true,"contract":{"name":"tripetto-runner-autoscroll","version":"4.0.1"},"background":{"color":"FCF7F0"},"font":{"size":16},"navigation":{"progressbarColor":"ECD9BE"},"buttons":{"baseColor":"D2BEA2","mode":"fill","roundness":8}},
        attachments,
        onSubmit
    });
  }

  useEffect(() => {
    form();
  }, [])
  
  return(
    <div className='text-center'>
      <div className='container'>
        <div id='survey'>
          <div id='form'>
            {form}
          </div>
        </div>
      </div>
    </div>
  )
}