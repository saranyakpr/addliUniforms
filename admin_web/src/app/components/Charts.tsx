import { useEffect } from 'react';

declare global {
  interface Window {
    ApexCharts: any;
  }
}

export function initializeCharts() {
  // Load ApexCharts from CDN
  if (typeof window !== 'undefined' && !window.ApexCharts) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/apexcharts@3.45.2/dist/apexcharts.min.js';
    script.async = true;
    script.onload = () => {
      renderCharts();
    };
    document.head.appendChild(script);
  } else if (window.ApexCharts) {
    renderCharts();
  }
}

function renderCharts() {
  if (!window.ApexCharts) return;

  // Sales Overview Chart
  const salesChartElement = document.querySelector('#sales-chart');
  if (salesChartElement) {
    const salesChart = new window.ApexCharts(salesChartElement, {
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      series: [{
        name: 'Revenue',
        data: [28000, 35000, 42000, 38000, 52000, 61000, 58000, 72000, 68000, 85000, 92000, 98000]
      }],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      colors: ['#b5894e'],
      grid: {
        borderColor: '#eae7e1',
      },
      tooltip: {
        y: {
          formatter: function(val: number) {
            return "$" + val.toLocaleString();
          }
        }
      }
    });
    salesChart.render();
  }

  // Category Chart
  const categoryChartElement = document.querySelector('#category-chart');
  if (categoryChartElement) {
    const categoryChart = new window.ApexCharts(categoryChartElement, {
      chart: {
        type: 'donut',
        height: 300,
      },
      series: [185, 142, 128, 115, 114],
      labels: ['Evening Dresses', 'Casual Dresses', 'Party Dresses', 'Maxi Dresses', 'Summer Dresses'],
      colors: ['#b5894e', '#5b8a72', '#7c6daa', '#c97d4e', '#c27085'],
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total Sales',
                formatter: function () {
                  return '$684K'
                }
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
    });
    categoryChart.render();
  }

  // Revenue Chart
  const revenueChartElement = document.querySelector('#revenue-chart');
  if (revenueChartElement) {
    const revenueChart = new window.ApexCharts(revenueChartElement, {
      chart: {
        type: 'bar',
        height: 280,
        toolbar: {
          show: false,
        },
      },
      series: [{
        name: 'Revenue',
        data: [42000, 51000, 48000, 62000, 58000, 71000]
      }],
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '60%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      colors: ['#b5894e'],
      grid: {
        borderColor: '#eae7e1',
      },
      tooltip: {
        y: {
          formatter: function(val: number) {
            return "$" + val.toLocaleString();
          }
        }
      }
    });
    revenueChart.render();
  }

  // Orders Chart
  const ordersChartElement = document.querySelector('#orders-chart');
  if (ordersChartElement) {
    const ordersChart = new window.ApexCharts(ordersChartElement, {
      chart: {
        type: 'line',
        height: 280,
        toolbar: {
          show: false,
        },
      },
      series: [{
        name: 'Orders',
        data: [320, 445, 512, 628]
      }],
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      },
      colors: ['#1b2e3c'],
      grid: {
        borderColor: '#eae7e1',
      },
      tooltip: {
        y: {
          formatter: function(val: number) {
            return val + " orders";
          }
        }
      }
    });
    ordersChart.render();
  }
}

export function ChartLoader() {
  useEffect(() => {
    initializeCharts();
  }, []);

  return null;
}
