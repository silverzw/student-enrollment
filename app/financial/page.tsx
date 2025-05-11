"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download, DollarSign, FileText, PiggyBank, Receipt, Shield, Wallet } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock financial data
const financialSummary = {
  tuition: 12500,
  paid: 7500,
  due: 5000,
  nextPayment: {
    amount: 1250,
    dueDate: "2025-06-01",
  },
  financialAid: 8000,
  scholarships: 3000,
  loans: 5000,
}

const transactions = [
  {
    id: "TRX-001",
    date: "2025-04-15",
    description: "Tuition Payment",
    amount: 2500,
    status: "completed",
    method: "Credit Card",
  },
  {
    id: "TRX-002",
    date: "2025-03-15",
    description: "Tuition Payment",
    amount: 2500,
    status: "completed",
    method: "Bank Transfer",
  },
  {
    id: "TRX-003",
    date: "2025-02-15",
    description: "Tuition Payment",
    amount: 2500,
    status: "completed",
    method: "Credit Card",
  },
  {
    id: "TRX-004",
    date: "2025-01-10",
    description: "Late Fee",
    amount: 50,
    status: "completed",
    method: "Credit Card",
  },
]

const paymentPlans = [
  {
    id: 1,
    name: "Monthly Payment Plan",
    description: "Divide your tuition into 10 equal monthly payments",
    installments: 10,
    fee: 50,
    isActive: true,
  },
  {
    id: 2,
    name: "Quarterly Payment Plan",
    description: "Pay your tuition in 4 installments throughout the year",
    installments: 4,
    fee: 25,
    isActive: false,
  },
  {
    id: 3,
    name: "Semester Payment Plan",
    description: "Pay your tuition at the beginning of each semester",
    installments: 2,
    fee: 0,
    isActive: false,
  },
]

export default function FinancialPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Calculate payment progress
  const paymentProgress = (financialSummary.paid / financialSummary.tuition) * 100

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Financial Center</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Download className="h-4 w-4 mr-2" />
            Download Statement
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <DollarSign className="h-4 w-4 mr-2" />
            Make a Payment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="financial-aid">Financial Aid</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardDescription>Current Balance</CardDescription>
                <CardTitle className="text-blue-900">${financialSummary.due.toLocaleString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Payment Progress</span>
                    <span className="font-medium">{paymentProgress.toFixed(0)}%</span>
                  </div>
                  <Progress value={paymentProgress} className="h-2" />
                </div>
                <div className="mt-4 flex items-center text-sm text-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    Next payment: ${financialSummary.nextPayment.amount.toLocaleString()} due on{" "}
                    {new Date(financialSummary.nextPayment.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardDescription>Financial Aid</CardDescription>
                <CardTitle className="text-blue-900">${financialSummary.financialAid.toLocaleString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Scholarships</span>
                    <span className="font-medium">${financialSummary.scholarships.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Loans</span>
                    <span className="font-medium">${financialSummary.loans.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-blue-700">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Aid applied to your account</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardDescription>Payment Methods</CardDescription>
                <CardTitle className="text-blue-900">Saved Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <div className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">•••• 4242</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Default</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-md border p-2">
                    <div className="flex items-center">
                      <Wallet className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Bank Account</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Use
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="mt-4 w-full text-blue-600">
                  <PiggyBank className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Recent Transactions</CardTitle>
              <CardDescription>Your payment history for the current term</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Receipt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            transaction.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }
                        >
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Receipt className="h-4 w-4" />
                          <span className="sr-only">Download Receipt</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="ml-auto text-blue-600">
                View All Transactions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Payment Plans</CardTitle>
              <CardDescription>Choose a payment plan that works for you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {paymentPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`rounded-lg border p-4 ${plan.isActive ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-blue-900">{plan.name}</h3>
                      {plan.isActive && <Badge className="bg-blue-100 text-blue-800">Active</Badge>}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Installments</span>
                        <span className="font-medium">{plan.installments}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Setup Fee</span>
                        <span className="font-medium">${plan.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Per Payment</span>
                        <span className="font-medium">
                          ${(financialSummary.tuition / plan.installments).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant={plan.isActive ? "outline" : "default"}
                      className={`w-full ${plan.isActive ? "text-blue-700 border-blue-200" : "bg-blue-600 hover:bg-blue-700"}`}
                    >
                      {plan.isActive ? "Current Plan" : "Select Plan"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Make a Payment</CardTitle>
              <CardDescription>Pay your tuition and fees</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Amount</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="pl-8 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="0.00"
                        defaultValue={financialSummary.nextPayment.amount}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                    <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="card">Credit Card (•••• 4242)</option>
                      <option value="bank">Bank Account</option>
                      <option value="new">Add New Payment Method</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment For</label>
                  <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="tuition">Tuition - Spring 2025</option>
                    <option value="housing">Housing Fee</option>
                    <option value="meal">Meal Plan</option>
                    <option value="other">Other Fees</option>
                  </select>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Process Payment</Button>

                <div className="text-xs text-gray-500 text-center">
                  Payments are processed securely. You will receive a receipt via email.
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial-aid" className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Financial Aid Summary</CardTitle>
              <CardDescription>Your financial aid for the current academic year</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Disbursement Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Scholarship</TableCell>
                    <TableCell>Academic Excellence Scholarship</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Disbursed</Badge>
                    </TableCell>
                    <TableCell>$2,000</TableCell>
                    <TableCell>Jan 15, 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Scholarship</TableCell>
                    <TableCell>STEM Achievement Award</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Disbursed</Badge>
                    </TableCell>
                    <TableCell>$1,000</TableCell>
                    <TableCell>Jan 15, 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Federal Loan</TableCell>
                    <TableCell>Subsidized Student Loan</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Disbursed</Badge>
                    </TableCell>
                    <TableCell>$3,500</TableCell>
                    <TableCell>Jan 15, 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Federal Loan</TableCell>
                    <TableCell>Unsubsidized Student Loan</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Disbursed</Badge>
                    </TableCell>
                    <TableCell>$1,500</TableCell>
                    <TableCell>Jan 15, 2025</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Scholarships</CardTitle>
                <CardDescription>Available scholarship opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4">
                  <h3 className="font-medium text-blue-900 mb-1">Merit Scholarship</h3>
                  <p className="text-sm text-gray-500 mb-2">For students with exceptional academic achievements</p>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-500">Amount:</span>
                    <span className="font-medium">Up to $5,000</span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-500">Deadline:</span>
                    <span className="font-medium">June 30, 2025</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-blue-700 border-blue-200">
                    Apply Now
                  </Button>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="font-medium text-blue-900 mb-1">Leadership Scholarship</h3>
                  <p className="text-sm text-gray-500 mb-2">For students demonstrating exceptional leadership skills</p>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-500">Amount:</span>
                    <span className="font-medium">Up to $3,000</span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-500">Deadline:</span>
                    <span className="font-medium">July 15, 2025</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-blue-700 border-blue-200">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-blue-600">
                  View All Scholarships
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Financial Aid Resources</CardTitle>
                <CardDescription>Helpful resources and information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">FAFSA Application Guide</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Step-by-step guide to completing your FAFSA application
                    </p>
                    <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                      Download PDF
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Scholarship Essay Tips</h4>
                    <p className="text-sm text-gray-500 mt-1">How to write compelling scholarship essays</p>
                    <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                      Read Article
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Financial Aid FAQ</h4>
                    <p className="text-sm text-gray-500 mt-1">Answers to common financial aid questions</p>
                    <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                      View FAQ
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Loan Repayment Calculator</h4>
                    <p className="text-sm text-gray-500 mt-1">Estimate your student loan payments</p>
                    <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                      Use Calculator
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Financial Documents</CardTitle>
              <CardDescription>Access and download your financial documents</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Tuition Statement</TableCell>
                    <TableCell>Spring 2025 Tuition and Fees Statement</TableCell>
                    <TableCell>Jan 5, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1098-T Form</TableCell>
                    <TableCell>Tuition Statement for Tax Purposes</TableCell>
                    <TableCell>Jan 31, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Financial Aid Award Letter</TableCell>
                    <TableCell>Official Financial Aid Award Notification</TableCell>
                    <TableCell>Dec 15, 2024</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Payment Plan Agreement</TableCell>
                    <TableCell>Terms and Conditions for Monthly Payment Plan</TableCell>
                    <TableCell>Jan 10, 2025</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Upload Documents</CardTitle>
              <CardDescription>Submit financial documents for processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                  <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select Document Type</option>
                    <option value="tax">Tax Documents</option>
                    <option value="verification">Verification Forms</option>
                    <option value="scholarship">Scholarship Application</option>
                    <option value="other">Other Financial Documents</option>
                  </select>
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-md p-6 text-center">
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-300 mb-2" />
                    <h3 className="text-gray-700 font-medium mb-1">Drag and drop your file here</h3>
                    <p className="text-sm text-gray-500 mb-3">or click to browse files</p>
                    <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                      Browse Files
                    </Button>
                    <p className="text-xs text-gray-500 mt-3">Supported formats: PDF, JPG, PNG (Max size: 10MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
                  <textarea
                    className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Add a description for this document"
                  ></textarea>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Upload Document</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}

// Missing Calendar component
function Calendar(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
