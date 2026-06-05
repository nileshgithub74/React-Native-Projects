import { doctors } from '@/Constant/doctorlistData';

export const fetchDoctors = async () => {
  // Simulating API call - replace with real API endpoint when available
  // const res = await axios.get('YOUR_API_ENDPOINT/doctors')
  // return res.data;
  
  // For now, return local data
  return Promise.resolve(doctors);
}