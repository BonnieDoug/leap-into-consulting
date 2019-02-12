export const state = () => ({
  list: [
    {
      date: 'Web 20th March 2019, 9.30am',
      headline: 'Leap into Consulting™ - Is Consulting right for you?',
      description: 'This 3-hour session is led by Sarah Hamilton-Gill, MD of GlobusHR Consulting Ltd and author of the "Leap into Consulting™" book and Sue Benoke from Smarter Business Consulting Ltd.',
      html: 'This 3-hour session is led by Sarah Hamilton-Gill, MD of GlobusHR Consulting Ltd and author of the "Leap into Consulting™" book and Sue Benoke from Smarter Business Consulting Ltd. This event brings together like minded people that are interested in hearing more about the world of consulting and considering making the leap.',
      to: ''
    },
    {
      date: 'Tue 30th April 2019, 9.30am',
      headline: 'Leap into Consulting™',
      description: 'This is your opportunity to discover whether you have what it takes to move into Consulting.',
      // html: 'This is your opportunity to discover whether you have what it takes to move into Consulting. Our team of Consulting experts will explain why this is the right time to be a consultant and how you can succeed in making the transition.',
      html: '<article class="vevent event"><p class="event__time"><time class="dtstart" datetime="09:30 - March 20th, 2019">09:30 - March 20th, 2019</time></p><p class="event__title">Leap into Consulting™ - Is Consulting Right for you?</p><p class="description event__body"> </p><p><strong>The Discovery Event for HR Professionals who want to go into Consulting.</strong></p> <p><span style="font-size: 12pt;">This 3-hour session is led by Sarah Hamilton-Gill, MD of GlobusHR Consulting Ltd and author of the "Leap into Consulting™" book as well as guest speakers.This event brings together like minded people that are interested in hearing more about the world of consulting and considering making the leap.</span></p> <p>This is your opportunity to discover whether you have what it takes to move into Consulting. Our team of Consulting experts will explain why this is the right time to be a consultant and how you can succeed in making the transition.</p> <p>What you will get from the discovery event</p> <ul> <li>Hear about the demand for HR Consultants in the UK</li> <li>A comprehensive report identifying how you fit the "Consultants DNA" profile , ( worth £125 )</li> <li>Learn how to leap into consulting without creating financial difficulties</li> <li>Get insights so that you can start to make the transition</li> <li>Receive a copy of the book " Leap into Consulting™" and lots of free resources.</li> <li>Have the opportunity to win an all-expenses paid residential place on our September 2019 Leap into Consulting™ Fast Track Retreat</li> </ul> <p>This interactive workshop held in complete confidentiality so that you can share openly.</p> <p>Our mission is to create the next generation of HR Consultants in the UK and beyond, without the pain of trial and error.</p> <p>All our events for 2019 will be held at Bartley Lodge Hotel which is easily accessible from the M27 at Cadnam.</p> <p>It\'s a creative and relaxing space to focus your attention on your future aspirations.</p> <p>https://www.newforesthotels.co.uk/bartley-lodge-hotel/</p> <p><span style="font-size: 12pt;">Sue and I look forward to seeing you there!</span></p> <p>Let\'s make 2019 your year !</p> <p>to book your place please <a title="Eventbrite" href="https://www.eventbrite.co.uk/e/leap-into-hr-consulting-is-consulting-right-for-you-tickets-52499574641?utm-medium=discovery&amp;utm-campaign=social&amp;utm-content=attendeeshare&amp;aff=escb&amp;utm-source=cp&amp;utm-term=listing">click here</a></p> <p>Want more information ? drop us a line on sarahhg@leapintoconsulting.com or call on 01590 637364</p> <p></p></article>',
      to: ''
    }
  ]
})

export const mutations = {
  SET_TOGGLE_NAVIGATION(state, payload) {
    state.showSideNavigation = payload
  }
}
export const getters = {}
export const actions = {}


