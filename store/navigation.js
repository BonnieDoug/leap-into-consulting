export const state = () => ({
  items: [
    {name: 'Home', to: '/', icon: 'mdi-home'},
    {name: 'Coaches', to: '/coaches'},
    {name: 'Book', to: '/book'},
    {name: 'Events', to: '/events'},
    {name: 'Win', to: '/win'},
    {name: 'Contact', to: '/contact'}
  ],
  showSideNavigation: false
})

export const mutations = {
  SET_TOGGLE_NAVIGATION (state, payload) {
    state.showSideNavigation = payload
  }
}
export const getters = {}
export const actions = {}


