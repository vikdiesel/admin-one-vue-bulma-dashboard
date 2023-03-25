import { getTemplatesList, uploadTemplate, deleteTemplate } from '@/api/templates'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getTemplates ({ commit }, query) {
      const data = await getTemplatesList(query)
      return data
    },
    async uploadTemplate ({ commit }, data) {
      const res = await uploadTemplate(data)
      return res
    },
    async deleteTemplate ({ commit }, id) {
      const res = await deleteTemplate(id)
      return res
    }
  }
}
