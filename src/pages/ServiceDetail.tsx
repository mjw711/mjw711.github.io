import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '@/constants';
import { ArrowLeft, Target } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.path.endsWith(id || ''));

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const data = [
    { name: 'Efficiency', value: 85 },
    { name: 'Cost', value: 40 },
    { name: 'Reach', value: 95 },
  ];
  const COLORS = ['#0891b2', '#0e7490', '#22d3ee'];

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-cyan-500 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO SYSTEMS
        </Link>

        <div className="glass-panel p-8 md:p-12 rounded-xl border-t-2 border-cyan-500">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-cyan-950 rounded border border-cyan-500">
                            <service.icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h1 className="text-4xl font-bold text-white tech-font uppercase tracking-wider">
                            {service.title}
                        </h1>
                    </div>

                    <div 
                        className="prose prose-invert prose-lg text-slate-300 max-w-none"
                        dangerouslySetInnerHTML={{ __html: service.fullDescription }}
                    />

                    <div className="mt-12">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded uppercase tracking-widest shadow-lg shadow-cyan-500/20 transition-all hover:translate-y-[-2px]"
                        >
                            Deploy This Asset <Target className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/3">
                    <div className="bg-slate-900/50 p-6 rounded border border-slate-700">
                        <h3 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-widest border-b border-slate-700 pb-2">
                            Performance Metrics
                        </h3>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#0891b2', color: '#fff' }}
                                        itemStyle={{ color: '#22d3ee' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="text-center text-xs text-slate-500 mt-2 font-mono">
                            * Simulated Performance Delta
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default ServiceDetail;