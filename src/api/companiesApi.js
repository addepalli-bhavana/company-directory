
// Fetch all companies from mockable.io
export const fetchCompanies = async () => {
  try {
    // Using mockable.io endpoint
    const response = await fetch('https://demo3513380.mockable.io/api/companies');
    
    if (!response.ok) {
      // Fallback to default companies if API fails
      console.warn('Failed to fetch from mockable.io');
      return [];
    }
    
    const data = await response.json();
    
    // If mockable.io returns empty or invalid data, use defaults
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    // Return default companies on error
    return [];
  }
};

