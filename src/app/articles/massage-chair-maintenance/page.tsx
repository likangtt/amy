import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Massage Chair Maintenance Guide - Keep Your Chair in Perfect Condition',
  description: 'Learn how to properly maintain your massage chair to extend its lifespan and ensure optimal performance.',
};

export default function MassageChairMaintenancePage() {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Maintenance
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Massage Chair Maintenance Guide
          </h1>
          <div className="flex items-center text-gray-500 text-sm mb-6">
            <time dateTime="2023-10-25">October 25, 2023</time>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="Person cleaning and maintaining a massage chair" 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Proper maintenance is essential to keep your massage chair functioning optimally and extend its lifespan. 
            Follow this comprehensive guide to ensure your investment continues to provide relaxation for years to come.
          </p>

          <h2>Daily Maintenance</h2>

          <h3>After Each Use</h3>
          <ul>
            <li><strong>Wipe Down Surfaces:</strong> Use a soft, damp cloth to clean the chair's surface</li>
            <li><strong>Check for Debris:</strong> Remove any items from pockets or crevices</li>
            <li><strong>Return to Upright Position:</strong> Don't leave the chair reclined when not in use</li>
            <li><strong>Turn Off Power:</strong> Always power down the chair completely</li>
          </ul>

          <h2>Weekly Maintenance</h2>

          <h3>Deep Cleaning</h3>
          <p>Perform a more thorough cleaning once a week:</p>
          <ul>
            <li><strong>Vacuum Crevices:</strong> Use a soft brush attachment to remove dust and debris</li>
            <li><strong>Clean Remote Control:</strong> Wipe with disinfectant wipes</li>
            <li><strong>Check Moving Parts:</strong> Ensure all mechanisms move smoothly</li>
            <li><strong>Inspect Cables:</strong> Look for any signs of wear or damage</li>
          </ul>

          <h2>Monthly Maintenance</h2>

          <h3>Comprehensive Inspection</h3>
          <p>Once a month, perform these detailed checks:</p>
          <ul>
            <li><strong>Test All Functions:</strong> Run through each massage program</li>
            <li><strong>Check Upholstery:</strong> Look for tears, wear, or staining</li>
            <li><strong>Lubricate Moving Parts:</strong> Apply manufacturer-recommended lubricants</li>
            <li><strong>Tighten Loose Screws:</strong> Check and tighten any loose hardware</li>
            <li><strong>Clean Air Filters:</strong> Remove and clean or replace filters</li>
          </ul>

          <h2>Cleaning Different Materials</h2>

          <h3>Leather Upholstery</h3>
          <ul>
            <li>Use leather-specific cleaners and conditioners</li>
            <li>Avoid harsh chemicals or abrasive materials</li>
            <li>Apply leather conditioner every 3-6 months</li>
            <li>Keep away from direct sunlight and heat sources</li>
          </ul>

          <h3>Synthetic Materials</h3>
          <ul>
            <li>Use mild soap and water solution</li>
            <li>Avoid bleach or strong detergents</li>
            <li>Test cleaning products on hidden areas first</li>
            <li>Allow to air dry completely</li>
          </ul>

          <h2>Common Issues and Solutions</h2>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Warning</h3>
            <p className="text-red-700">
              Always unplug the chair before performing any maintenance or troubleshooting.
            </p>
          </div>

          <h3>Chair Won't Turn On</h3>
          <ul>
            <li>Check power connection and outlet</li>
            <li>Inspect circuit breaker or fuse</li>
            <li>Examine power cord for damage</li>
            <li>Contact customer service if issues persist</li>
          </ul>

          <h3>Unusual Noises</h3>
          <ul>
            <li>Check for foreign objects in moving parts</li>
            <li>Lubricate mechanisms as recommended</li>
            <li>Ensure chair is on level surface</li>
            <li>Schedule professional inspection if noises continue</li>
          </ul>

          <h3>Massage Feels Different</h3>
          <ul>
            <li>Recalibrate body scan settings</li>
            <li>Check for worn massage nodes</li>
            <li>Verify proper positioning in chair</li>
            <li>Review user manual for troubleshooting steps</li>
          </ul>

          <h2>Professional Maintenance</h2>

          <h3>Annual Service</h3>
          <p>Consider professional servicing annually to:</p>
          <ul>
            <li>Perform comprehensive mechanical inspection</li>
            <li>Replace worn components</li>
            <li>Update software if applicable</li>
            <li>Maintain warranty coverage</li>
          </ul>

          <h2>Storage and Environment</h2>

          <h3>Optimal Conditions</h3>
          <ul>
            <li><strong>Temperature:</strong> 60-80°F (15-27°C)</li>
            <li><strong>Humidity:</strong> 30-50% relative humidity</li>
            <li><strong>Location:</strong> Away from direct sunlight and heat sources</li>
            <li><strong>Ventilation:</strong> Ensure adequate air circulation</li>
          </ul>

          <h2>What NOT to Do</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">❌ Avoid These Mistakes</h3>
            <ul className="text-yellow-700 list-disc pl-5">
              <li>Using harsh chemicals or abrasive cleaners</li>
              <li>Allowing pets to use the chair as furniture</li>
              <li>Exceeding weight limits</li>
              <li>Ignoring unusual sounds or behaviors</li>
              <li>Attempting complex repairs yourself</li>
            </ul>
          </div>

          <h2>Maintenance Schedule Checklist</h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Quick Reference</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-800">Daily</h4>
                <ul className="text-sm text-gray-600">
                  <li>Wipe surfaces</li>
                  <li>Remove debris</li>
                  <li>Power down</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800">Weekly</h4>
                <ul className="text-sm text-gray-600">
                  <li>Deep clean</li>
                  <li>Vacuum crevices</li>
                  <li>Check functions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">Monthly</h4>
                <ul className="text-sm text-gray-600">
                  <li>Full inspection</li>
                  <li>Lubricate parts</li>
                  <li>Clean filters</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Professional Help?</h3>
            <p className="text-blue-800">
              If you encounter issues beyond basic maintenance, don't hesitate to contact your manufacturer's 
              customer service or a certified technician. Regular professional maintenance can prevent 
              costly repairs and extend your chair's lifespan significantly.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}