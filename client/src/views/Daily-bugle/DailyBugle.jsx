import React from 'react'
import Headline from '../../components/daily-bugle/Headline/Headline'
import Title from '../../components/daily-bugle/Title/Title'
import NavLinks from '../../components/Navlinks/NavLinks'
import './DailyBugle.css'
const DailyBugle = () => {
  return (
    <div>
       <Title/>
       <NavLinks/>
       <Headline/>
       <div className="frontpage-bugle">

        <div className="left">
            <a href="https://www.thedailybugle.net/" target="_blank" rel="noreferrer"><h2 className="headerz">SPIDERMAN UNCOVERED</h2></a>
            <p>Maniac. Menace. Mystery? No more! That's right, true Buglers! Ever since the masked marauder masquerading as Spider-Man dangled with impunity above our city streets – without a permit, might I add – and took the law into his own web-covered hands, yours truly worked tirelessly to de-mask the myth and reveal the truth. And now we have. Peter Parker. Just a boy.</p>
            <p>And now that the coward has been unmasked, will he do his civic duty and answer for his egregious crimes? Will he use his great power to join the police force? The fire department? Fat chance! Will Peter Parker take responsibility for the vandalism and destruction of property those powers have left smoking in his wake? Ha! Don't make me laugh!

Parker wore a mask because he refuses to answer for his actions. He kept his identity hidden because he views himself as above the law. But if the Constitution doesn't allow citizens to vote until they've reached the age of 18, why would we continue to let a child decide who is saved and who is guilty?</p>       

<p>

We know he's made mistakes before. Just ask Quentin Beck. Oh, wait, you can't! 'Cause Spidey killed him! So if you don't want to be next, dear reader, join me in this call to the unmasked red-tight-wearing monster:

Peter Parker, we are the public, and we will be YOUR judge and YOUR jury. Call the tip line, folks. Let Parker know you're watching.

</p>
<p>J. Jonah Jameson, Editor in Chief</p>
        </div>

        <div className="right">
            <a href="https://www.thedailybugle.net/" target="_blank" rel="noreferrer"><h2 className="headerz">OUR HERO?</h2></a>
            <img  className="beck" src="https://www.looper.com/img/gallery/confusing-moments-in-spider-man-no-way-home-explained/how-did-mysterio-fake-his-murder-1639774199.jpg" alt="" />
            <p>Quentin Beck just exposed everone who Spiderman is! With the latest news we have found that Spider-Man has killed Mysterio. </p>
        </div>
        
    </div>
    </div>
  )
}

export default DailyBugle