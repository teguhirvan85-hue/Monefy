// ============================================================================
//  Monefy — Mock data
// ============================================================================

window.MonefyData = {
  // ---------- WALLETS ----------
  wallets: [
    {
      id: 'w001', name: 'Main Account', type: 'Visa Debit', brand: 'Visa',
      number: '4242 4242 4242 8744', last4: '8744', holder: 'KRISTIN WATSON', expiry: '12/27',
      balance: 58145.07, pending: 250.00, available: 57895.07,
      gradient: 'linear-gradient(135deg, #163300 0%, #2D5C0F 50%, #455C33 100%)',
      currency: 'USD', isPrimary: true, isFrozen: false,
      monthlySpend: 11200.56, monthlyIn: 18500.99,
    },
    {
      id: 'w002', name: 'Travel Card', type: 'Mastercard Debit', brand: 'Mastercard',
      number: '5421 ●●●● ●●●● 5421', last4: '5421', holder: 'KRISTIN WATSON', expiry: '08/26',
      balance: 3450.80, pending: 120, available: 3330.80,
      gradient: 'linear-gradient(135deg, #DF1C41 0%, #E55D2A 50%, #FFB200 100%)',
      currency: 'USD', isPrimary: false, isFrozen: false,
      monthlySpend: 1840.50, monthlyIn: 2500,
    },
    {
      id: 'w003', name: 'Savings', type: 'Visa Savings', brand: 'Visa',
      number: '4111 ●●●● ●●●● 9012', last4: '9012', holder: 'KRISTIN WATSON', expiry: '09/29',
      balance: 25800.00, pending: 0, available: 25800.00,
      gradient: 'linear-gradient(135deg, #1434CB 0%, #4B6CFF 50%, #9FE870 100%)',
      currency: 'USD', isPrimary: false, isFrozen: false,
      monthlySpend: 0, monthlyIn: 5000,
    },
    {
      id: 'w004', name: 'Cash Pool', type: 'PayPal', brand: 'PayPal',
      number: '●●●● 4123', last4: '4123', holder: 'KRISTIN WATSON', expiry: '—',
      balance: 1290.45, pending: 50, available: 1240.45,
      gradient: 'linear-gradient(135deg, #936DFF 0%, #B49AFF 50%, #F4F0FF 100%)',
      currency: 'USD', isPrimary: false, isFrozen: true,
      monthlySpend: 320.00, monthlyIn: 1610.45,
    },
  ],

  // ---------- TRANSACTIONS ----------
  transactions: [
    { id: 't001', walletId: 'w001', name: 'Kristin Watson', avatar: 'assets/avatar-kristin.jpg',  type: 'Withdrawal', category: 'Cash',          amount: -500.00,   date: '2024-08-10T10:12:00', status: 'Completed', note: 'ATM withdrawal — Downtown branch' },
    { id: 't002', walletId: 'w001', name: 'Guy Hawkins',    avatar: 'assets/avatar-guy.jpg',      type: 'Transfer',   category: 'Transfer',      amount: -250.00,   date: '2024-08-10T08:20:00', status: 'Completed', note: 'Birthday gift' },
    { id: 't003', walletId: 'w001', name: 'Upwork',         brandIcon: 'assets/upwork.svg', brandBg: '#40C4AA', type: 'Request', category: 'Salary', amount: 1250.00, date: '2024-08-09T20:00:00', status: 'Completed', note: 'Project milestone payment' },
    { id: 't004', walletId: 'w001', name: 'Netflix',        brandIcon: 'assets/netflix.svg', brandBg: 'rgba(223,13,18,0.1)', type: 'Payment',  category: 'Subscription', amount: -25.00,  date: '2024-08-15T00:00:00', status: 'Scheduled', note: 'Monthly subscription' },
    { id: 't005', walletId: 'w001', name: 'Spotify',        brandIcon: 'assets/spotify.svg', brandBg: 'rgba(0,218,90,0.1)', type: 'Payment',   category: 'Subscription', amount: -9.99,   date: '2024-08-15T00:00:00', status: 'Scheduled', note: 'Premium subscription' },
    { id: 't006', walletId: 'w001', name: 'Robert Fox',     avatar: 'assets/avatar-guy.jpg',      type: 'Transfer',   category: 'Transfer',      amount: -120.00,   date: '2024-08-08T14:30:00', status: 'Completed', note: 'Dinner split' },
    { id: 't007', walletId: 'w002', name: 'Jenny Wilson',   avatar: 'assets/avatar-kristin.jpg',  type: 'Request',    category: 'Salary',        amount: 450.00,    date: '2024-08-07T09:15:00', status: 'Pending',   note: 'Freelance design work' },
    { id: 't008', walletId: 'w002', name: 'Starbucks',      brandIcon: 'assets/spotify.svg', brandBg: 'rgba(0,107,84,0.1)', type: 'Payment', category: 'Food',           amount: -6.75,    date: '2024-08-06T08:45:00', status: 'Completed', note: 'Coffee' },
    { id: 't009', walletId: 'w001', name: 'Amazon',         brandIcon: 'assets/upwork.svg', brandBg: '#FF9900',  type: 'Payment',   category: 'Shopping',      amount: -187.30,   date: '2024-08-05T15:22:00', status: 'Completed', note: 'Electronics order' },
    { id: 't010', walletId: 'w001', name: 'Salary — Acme Co.', brandIcon: 'assets/spotify.svg', brandBg: 'rgba(0,218,90,0.1)', type: 'Deposit', category: 'Salary',  amount: 4200.00,   date: '2024-08-01T00:00:00', status: 'Completed', note: 'Monthly salary' },
    { id: 't011', walletId: 'w002', name: 'Cameron Williamson', avatar: 'assets/avatar-guy.jpg',  type: 'Transfer',   category: 'Transfer',      amount: 75.00,     date: '2024-07-30T11:00:00', status: 'Completed', note: 'Refund' },
    { id: 't012', walletId: 'w002', name: 'Uber',           brandIcon: 'assets/netflix.svg', brandBg: '#000',     type: 'Payment',   category: 'Transport',     amount: -18.40,    date: '2024-07-29T22:10:00', status: 'Completed', note: 'Ride home' },
    { id: 't013', walletId: 'w001', name: 'Apple Store',    brandIcon: 'assets/spotify.svg', brandBg: 'rgba(0,0,0,0.1)', type: 'Payment', category: 'Shopping', amount: -1299.00,  date: '2024-07-28T13:00:00', status: 'Completed', note: 'MacBook Air' },
    { id: 't014', walletId: 'w001', name: 'Brooklyn Simmons', avatar: 'assets/avatar-kristin.jpg', type: 'Request',  category: 'Other',         amount: 320.00,    date: '2024-07-27T16:45:00', status: 'Failed',    note: 'Payment declined by recipient' },
    { id: 't015', walletId: 'w001', name: 'Whole Foods',    brandIcon: 'assets/upwork.svg', brandBg: 'rgba(0,128,0,0.1)', type: 'Payment',  category: 'Food',          amount: -89.50,    date: '2024-07-26T17:30:00', status: 'Completed', note: 'Weekly groceries' },
    { id: 't016', walletId: 'w001', name: 'Esther Howard',  avatar: 'assets/avatar-guy.jpg',      type: 'Transfer',   category: 'Transfer',      amount: -200.00,   date: '2024-07-25T10:00:00', status: 'Completed', note: 'Rent share' },
    { id: 't017', walletId: 'w001', name: 'Dribbble',       brandIcon: 'assets/netflix.svg', brandBg: 'rgba(234,76,137,0.1)', type: 'Payment',  category: 'Subscription', amount: -8.00, date: '2024-07-25T00:00:00', status: 'Completed', note: 'Pro plan' },
    { id: 't018', walletId: 'w001', name: 'Figma',          brandIcon: 'assets/spotify.svg', brandBg: 'rgba(162,89,255,0.1)', type: 'Payment',  category: 'Subscription', amount: -12.00, date: '2024-07-24T00:00:00', status: 'Completed', note: 'Professional plan' },
    { id: 't019', walletId: 'w002', name: 'Devon Lane',     avatar: 'assets/avatar-guy.jpg',      type: 'Request',    category: 'Other',         amount: 60.00,     date: '2024-07-23T19:20:00', status: 'Pending',   note: 'Concert ticket reimbursement' },
    { id: 't020', walletId: 'w003', name: 'Chase Bank',     brandIcon: 'assets/upwork.svg', brandBg: 'rgba(20,52,203,0.1)', type: 'Deposit', category: 'Other',         amount: 1000.00,   date: '2024-07-22T09:00:00', status: 'Completed', note: 'Account top-up' },
  ],
};

// ---------- INVOICES ----------
window.MonefyData.invoices = [
  { id:'i001', number:'INV-2024-0142', client:'Acme Corp.',         clientEmail:'billing@acme.com',         amount: 4800.00, due:'2024-08-25', issued:'2024-07-25', status:'Pending',  items:[{desc:'UI Design — landing page',qty:1,price:3500},{desc:'Iterations',qty:5,price:260}] },
  { id:'i002', number:'INV-2024-0141', client:'Globex Inc.',        clientEmail:'finance@globex.io',        amount: 2150.00, due:'2024-08-20', issued:'2024-07-20', status:'Overdue',  items:[{desc:'Brand consultation',qty:10,price:215}] },
  { id:'i003', number:'INV-2024-0140', client:'Stark Industries',   clientEmail:'ap@stark.tech',            amount:12500.00, due:'2024-09-15', issued:'2024-08-15', status:'Paid',     items:[{desc:'Q3 retainer',qty:1,price:12500}] },
  { id:'i004', number:'INV-2024-0139', client:'Wayne Enterprises',  clientEmail:'invoices@wayne.com',       amount: 3275.50, due:'2024-08-30', issued:'2024-08-01', status:'Pending',  items:[{desc:'Web app development',qty:25,price:131.02}] },
  { id:'i005', number:'INV-2024-0138', client:'Hooli',              clientEmail:'pay@hooli.com',            amount:  950.00, due:'2024-08-28', issued:'2024-07-28', status:'Pending',  items:[{desc:'Logo refresh',qty:1,price:950}] },
  { id:'i006', number:'INV-2024-0137', client:'Pied Piper',         clientEmail:'richard@piedpiper.com',    amount: 1820.00, due:'2024-08-10', issued:'2024-07-10', status:'Paid',     items:[{desc:'Onboarding redesign',qty:1,price:1820}] },
  { id:'i007', number:'INV-2024-0136', client:'Initech',            clientEmail:'milton@initech.com',       amount:  680.00, due:'2024-08-05', issued:'2024-07-05', status:'Overdue',  items:[{desc:'Print materials',qty:4,price:170}] },
  { id:'i008', number:'INV-2024-0135', client:'Massive Dynamic',    clientEmail:'ap@massivedynamic.com',    amount: 8400.00, due:'2024-09-01', issued:'2024-08-01', status:'Paid',     items:[{desc:'Mobile app design',qty:1,price:8400}] },
  { id:'i009', number:'INV-2024-0134', client:'Soylent Corp.',      clientEmail:'finance@soylent.co',       amount: 5100.00, due:'2024-09-10', issued:'2024-08-10', status:'Pending',  items:[{desc:'Marketing site',qty:1,price:5100}] },
  { id:'i010', number:'DRAFT-0007',    client:'Cyberdyne Systems',  clientEmail:'',                         amount: 2400.00, due:'2024-09-20', issued:'2024-08-20', status:'Draft',    items:[{desc:'TBD',qty:1,price:2400}] },
  { id:'i011', number:'DRAFT-0006',    client:'Tyrell Corp.',       clientEmail:'',                         amount:  750.00, due:'2024-09-12', issued:'2024-08-12', status:'Draft',    items:[{desc:'Design consultation',qty:3,price:250}] },
  { id:'i012', number:'INV-2024-0133', client:'Umbrella Corp.',     clientEmail:'wesker@umbrella.com',      amount: 3600.00, due:'2024-07-30', issued:'2024-06-30', status:'Paid',     items:[{desc:'Brand identity',qty:1,price:3600}] },
];

// Helpers
window.MonefyData.formatAmount = function(n) {
  const abs = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (n < 0 ? '- $' : '+ $') + abs;
};
window.MonefyData.formatDate = function(iso) {
  const d = new Date(iso);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const day = String(d.getDate()).padStart(2, '0');
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${day} ${month} ${year}, ${String(hours).padStart(2,'0')}:${minutes} ${ampm}`;
};
