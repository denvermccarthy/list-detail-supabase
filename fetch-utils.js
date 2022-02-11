const SUPABASE_URL = 'https://lxifeplqjanpuugbzgyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aWZlcGxxamFucHV1Z2J6Z3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU0NTEsImV4cCI6MTk2MDAxMTQ1MX0.4hkIbGdYMJ7SzqMSm39JtJRvMyFal0vMXHHWB0APEJw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getFoods() {
    const resp = await client.from('breakfast_foods').select('*');
    console.log(resp);
    return checkError(resp);
}

export async function getFoodById(id) {
    const resp = await client.from('breakfast_foods').select('*').eq('id', id).single();
    console.log(resp);
    return checkError(resp);
}
