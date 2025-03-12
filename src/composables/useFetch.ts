import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebaseConfig'

export function useFetch<T = any>(collectionName: string) {
  const data = ref<T[]>([]) // Usamos ref con un array vacío
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, collectionName)
      const querySnapshot = await getDocs(collectionRef)

      const fetchedData: T[] = []
      querySnapshot.forEach((doc) => {
        fetchedData.push({
          id: doc.id,
          ...(doc.data() as T),
        })
      })

      if (!fetchedData.length) {
        throw new Error('No se encontraron los datos.')
      }

      data.value = fetchedData // Asignamos el nuevo array a la referencia
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  return { data, loading, error }
}
