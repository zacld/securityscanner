'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function VunScannerGUI() {
  const [status, setStatus] = useState('Idle');
  const [log, setLog] = useState<string[]>([]);

  const runScan = async () => {
    setStatus('Scanning...');
    try {
      const res = await fetch('/api/run-vscanner');
      const data = await res.json();
      setLog(data.log || []);
      setStatus('Completed');
    } catch (err: any) {
      setLog([`Error: ${err.message}`]);
      setStatus('Failed');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card>
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Vulnerability Scanner</h1>
          <Button onClick={runScan}>Run Scan</Button>
          <p className="text-muted-foreground mt-4">Status: {status}</p>
          <div className="bg-gray-100 p-4 mt-4 rounded text-sm max-h-64 overflow-auto">
            {log.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
