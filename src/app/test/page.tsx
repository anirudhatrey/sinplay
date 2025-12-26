import { createClient } from '@/lib/supabase/server'

export default async function TestPage() {
  const supabase = await createClient()
  
  // Test the connection
  const { data, error } = await supabase.auth.getSession()
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      
      {error ? (
        <div className="text-red-500">
          ❌ Error: {error.message}
        </div>
      ) : (
        <div className="text-green-500">
          ✅ Connected to Supabase!
        </div>
      )}
      
      <pre className="mt-4 p-4 bg-zinc-900 rounded text-sm overflow-auto">
        {JSON.stringify({ session: data.session, error }, null, 2)}
      </pre>
    </div>
  )
}