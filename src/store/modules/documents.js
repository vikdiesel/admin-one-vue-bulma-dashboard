import {
  getDocumentsList,
  generateDocument,
  deleteDocument
} from '@/api/documents'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getDocuments ({ commit }, query) {
      const data = await getDocumentsList(query)
      return data
    },
    async generateDocument ({ commit }, data) {
      const res = await generateDocument(data)
      return res
    },
    async deleteDocument ({ commit }, id) {
      const res = await deleteDocument(id)
      return res
    }
  }
}
