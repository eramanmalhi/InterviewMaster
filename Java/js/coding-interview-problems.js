data["Coding Problems (Java)"] = [

    {
    question: "Reverse a String",
    answer: "The simplest approach is to iterate from the end of the string and build a new string. In interviews, after explaining the basic solution, discuss StringBuilder.reverse() and its time complexity.",
    code: `
    public static String reverse(String str) {
        StringBuilder sb = new StringBuilder(str);
        return sb.reverse().toString();
    }
    `
    },
    
    {
    question: "Check if a String is Palindrome",
    answer: "A palindrome reads the same forward and backward. Compare characters from both ends moving toward the center. This avoids creating additional strings.",
    code: `
    public static boolean isPalindrome(String str) {
        int left = 0;
        int right = str.length() - 1;
    
        while(left < right) {
            if(str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    `
    },
    
    {
    question: "Count Vowels in a String",
    answer: "Traverse the string and count occurrences of a, e, i, o and u. Interviewers often ask about uppercase handling and Unicode considerations.",
    code: `
    public static int countVowels(String str) {
        int count = 0;
    
        for(char ch : str.toLowerCase().toCharArray()) {
            if("aeiou".indexOf(ch) != -1) {
                count++;
            }
        }
    
        return count;
    }
    `
    },
    
    {
    question: "Find Duplicate Characters in a String",
    answer: "Use a HashMap to count occurrences. Any character with count greater than one is a duplicate.",
    code: `
    Map<Character, Integer> map = new HashMap<>();
    
    for(char ch : str.toCharArray()) {
        map.put(ch, map.getOrDefault(ch, 0) + 1);
    }
    
    for(Map.Entry<Character,Integer> entry : map.entrySet()) {
        if(entry.getValue() > 1) {
            System.out.println(entry.getKey());
        }
    }
    `
    },
    
    {
    question: "Find First Non-Repeated Character",
    answer: "Maintain frequency using LinkedHashMap because it preserves insertion order. Then find the first character whose count is one.",
    code: `
    Map<Character, Integer> map = new LinkedHashMap<>();
    
    for(char ch : str.toCharArray()) {
        map.put(ch, map.getOrDefault(ch, 0) + 1);
    }
    
    for(Map.Entry<Character,Integer> entry : map.entrySet()) {
        if(entry.getValue() == 1) {
            return entry.getKey();
        }
    }
    `
    },
    
    {
    question: "Check Whether Two Strings Are Anagrams",
    answer: "Two strings are anagrams if they contain the same characters with the same frequency. Sorting or frequency counting are common solutions.",
    code: `
    public static boolean isAnagram(String s1, String s2) {
    
        char[] arr1 = s1.toCharArray();
        char[] arr2 = s2.toCharArray();
    
        Arrays.sort(arr1);
        Arrays.sort(arr2);
    
        return Arrays.equals(arr1, arr2);
    }
    `
    },
    
    {
    question: "Find Missing Number in an Array",
    answer: "Given numbers from 1 to N with one missing value. Calculate expected sum and subtract actual sum.",
    code: `
    public static int findMissing(int[] arr, int n) {
    
        int expected = n * (n + 1) / 2;
    
        int actual = 0;
    
        for(int num : arr) {
            actual += num;
        }
    
        return expected - actual;
    }
    `
    },
    
    {
    question: "Find Second Largest Number in Array",
    answer: "Maintain largest and second largest values while traversing the array once.",
    code: `
    int largest = Integer.MIN_VALUE;
    int secondLargest = Integer.MIN_VALUE;
    
    for(int num : arr) {
    
        if(num > largest) {
            secondLargest = largest;
            largest = num;
        } else if(num > secondLargest && num != largest) {
            secondLargest = num;
        }
    }
    `
    },
    
    {
    question: "Reverse an Integer",
    answer: "Repeatedly extract the last digit and construct the reversed number.",
    code: `
    public static int reverse(int num) {
    
        int result = 0;
    
        while(num != 0) {
            int digit = num % 10;
            result = result * 10 + digit;
            num = num / 10;
        }
    
        return result;
    }
    `
    },
    
    {
    question: "Check Prime Number",
    answer: "Check divisibility only until square root of the number. This reduces unnecessary iterations.",
    code: `
    public static boolean isPrime(int num) {
    
        if(num <= 1) {
            return false;
        }
    
        for(int i = 2; i <= Math.sqrt(num); i++) {
    
            if(num % i == 0) {
                return false;
            }
        }
    
        return true;
    }
    `
    },

    {
    question: "Factorial of a Number",
    answer: "Factorial is one of the most common beginner interview questions. Start with iterative solution because it avoids recursion overhead.",
    code: `
    public static long factorial(int n) {
    
        long result = 1;
    
        for(int i = 2; i <= n; i++) {
            result *= i;
        }
    
        return result;
    }
    `
    },
    
    {
    question: "Generate Fibonacci Series",
    answer: "Interviewers usually start with iterative solution and then ask for recursion and dynamic programming approaches.",
    code: `
    public static void fibonacci(int n) {
    
        int first = 0;
        int second = 1;
    
        for(int i = 0; i < n; i++) {
    
            System.out.print(first + " ");
    
            int next = first + second;
            first = second;
            second = next;
        }
    }
    `
    },
    
    {
    question: "Check Armstrong Number",
    answer: "An Armstrong number is a number equal to the sum of cubes of its digits. Example: 153 = 1³ + 5³ + 3³.",
    code: `
    public static boolean isArmstrong(int num) {
    
        int original = num;
        int sum = 0;
    
        while(num > 0) {
    
            int digit = num % 10;
            sum += digit * digit * digit;
            num /= 10;
        }
    
        return sum == original;
    }
    `
    },
    
    {
    question: "Swap Two Numbers Without Third Variable",
    answer: "A classic interview problem. Arithmetic-based swapping avoids an extra variable.",
    code: `
    int a = 10;
    int b = 20;
    
    a = a + b;
    b = a - b;
    a = a - b;
    `
    },
    
    {
    question: "Remove Duplicate Characters from String",
    answer: "LinkedHashSet preserves insertion order while automatically removing duplicates.",
    code: `
    public static String removeDuplicates(String str) {
    
        Set<Character> set = new LinkedHashSet<>();
    
        for(char ch : str.toCharArray()) {
            set.add(ch);
        }
    
        StringBuilder sb = new StringBuilder();
    
        for(char ch : set) {
            sb.append(ch);
        }
    
        return sb.toString();
    }
    `
    },
    
    {
    question: "Character Frequency Count",
    answer: "Very common interview problem. Use HashMap to count occurrences.",
    code: `
    Map<Character,Integer> map = new HashMap<>();
    
    for(char ch : str.toCharArray()) {
        map.put(ch, map.getOrDefault(ch, 0) + 1);
    }
    
    System.out.println(map);
    `
    },
    
    {
    question: "Count Words in a String",
    answer: "Split the string based on spaces and count the resulting words.",
    code: `
    public static int countWords(String str) {
    
        if(str == null || str.trim().isEmpty()) {
            return 0;
        }
    
        return str.trim().split("\\\\s+").length;
    }
    `
    },
    
    {
    question: "Remove Whitespaces from String",
    answer: "Frequently asked as a simple string manipulation problem.",
    code: `
    public static String removeSpaces(String str) {
        return str.replaceAll("\\\\s+", "");
    }
    `
    },
    
    {
    question: "String Compression",
    answer: "Convert aaabbcc into a3b2c2. Often asked before discussing StringBuilder optimization.",
    code: `
    public static String compress(String str) {
    
        StringBuilder result = new StringBuilder();
    
        int count = 1;
    
        for(int i = 1; i <= str.length(); i++) {
    
            if(i < str.length() &&
               str.charAt(i) == str.charAt(i - 1)) {
    
                count++;
            } else {
    
                result.append(str.charAt(i - 1));
                result.append(count);
    
                count = 1;
            }
        }
    
        return result.toString();
    }
    `
    },
    
    {
    question: "Balanced Parentheses",
    answer: "Classic stack-based problem. Every opening bracket must have a matching closing bracket.",
    code: `
    public static boolean isBalanced(String str) {
    
        Stack<Character> stack = new Stack<>();
    
        for(char ch : str.toCharArray()) {
    
            if(ch == '(') {
                stack.push(ch);
            }
            else if(ch == ')') {
    
                if(stack.isEmpty()) {
                    return false;
                }
    
                stack.pop();
            }
        }
    
        return stack.isEmpty();
    }
    `
    },
    
    {
    question: "Find Common Elements Between Two Arrays",
    answer: "HashSet reduces lookup complexity from O(n²) to O(n).",
    code: `
    Set<Integer> set = new HashSet<>();
    
    for(int num : arr1) {
        set.add(num);
    }
    
    for(int num : arr2) {
    
        if(set.contains(num)) {
            System.out.println(num);
        }
    }
    `
    },
    
    {
    question: "Check String Rotation",
    answer: "Two strings are rotations if one exists inside the concatenation of the other with itself.",
    code: `
    public static boolean isRotation(
            String s1,
            String s2) {
    
        return s1.length() == s2.length()
            && (s1 + s1).contains(s2);
    }
    `
    },
    
    {
    question: "Largest Of Three Numbers",
    answer: "Simple conditional comparison question often asked for beginners.",
    code: `
    public static int largest(
            int a,
            int b,
            int c) {
    
        return Math.max(a, Math.max(b, c));
    }
    `
    },
    
    {
    question: "Matrix Transpose",
    answer: "Transpose converts rows into columns.",
    code: `
    for(int i = 0; i < rows; i++) {
    
        for(int j = 0; j < cols; j++) {
    
            transpose[j][i] = matrix[i][j];
        }
    }
    `
    },
    
    {
    question: "Rotate Matrix By 90 Degrees",
    answer: "Common interview problem. First transpose, then reverse each row.",
    code: `
    for(int i = 0; i < n; i++) {
    
        for(int j = i; j < n; j++) {
    
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for(int i = 0; i < n; i++) {
    
        int left = 0;
        int right = n - 1;
    
        while(left < right) {
    
            int temp = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = temp;
    
            left++;
            right--;
        }
    }
    `
    },

    {
    question: "Java 8: Find Duplicate Elements in a List",
    answer: "One of the most frequently asked Java 8 interview questions. Use a Set to track already seen elements and filter duplicates.",
    code: `
    List<Integer> numbers =
            Arrays.asList(1,2,3,4,2,5,3,6);
    
    Set<Integer> seen = new HashSet<>();
    
    List<Integer> duplicates =
        numbers.stream()
               .filter(n -> !seen.add(n))
               .collect(Collectors.toList());
    
    System.out.println(duplicates);
    `
    },
    
    {
    question: "Java 8: Remove Duplicates From List",
    answer: "The distinct() method internally removes duplicates while preserving encounter order.",
    code: `
    List<Integer> unique =
            numbers.stream()
                   .distinct()
                   .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Find Highest Salary Employee",
    answer: "A very common Stream API interview problem.",
    code: `
    Employee employee =
        employees.stream()
                 .max(Comparator.comparing(
                         Employee::getSalary))
                 .orElse(null);
    `
    },
    
    {
    question: "Java 8: Find Second Highest Salary Employee",
    answer: "Sort salaries in descending order and skip the first record.",
    code: `
    Employee employee =
        employees.stream()
                 .sorted(
                    Comparator.comparing(
                        Employee::getSalary)
                    .reversed())
                 .skip(1)
                 .findFirst()
                 .orElse(null);
    `
    },
    
    {
    question: "Java 8: Count Occurrences Of Each Element",
    answer: "Uses groupingBy and counting collectors.",
    code: `
    Map<String, Long> result =
        names.stream()
             .collect(
                 Collectors.groupingBy(
                     Function.identity(),
                     Collectors.counting()
                 ));
    `
    },
    
    {
    question: "Java 8: Partition Even And Odd Numbers",
    answer: "partitioningBy is specifically designed for binary grouping.",
    code: `
    Map<Boolean, List<Integer>> result =
        numbers.stream()
               .collect(
                   Collectors.partitioningBy(
                       n -> n % 2 == 0
                   ));
    `
    },
    
    {
    question: "Java 8: Convert List To Map",
    answer: "Frequently asked to check understanding of key-value mapping.",
    code: `
    Map<Integer, String> result =
        employees.stream()
                 .collect(
                     Collectors.toMap(
                         Employee::getId,
                         Employee::getName
                     ));
    `
    },
    
    {
    question: "Java 8: Group Employees By Department",
    answer: "One of the most common groupingBy interview questions.",
    code: `
    Map<String, List<Employee>> result =
        employees.stream()
                 .collect(
                     Collectors.groupingBy(
                         Employee::getDepartment
                     ));
    `
    },
    
    {
    question: "Java 8: Count Employees Per Department",
    answer: "Combination of groupingBy and counting.",
    code: `
    Map<String, Long> result =
        employees.stream()
                 .collect(
                     Collectors.groupingBy(
                         Employee::getDepartment,
                         Collectors.counting()
                     ));
    `
    },
    
    {
    question: "Java 8: Find Longest String In List",
    answer: "Uses max() with Comparator based on string length.",
    code: `
    String longest =
        names.stream()
             .max(
                 Comparator.comparingInt(
                     String::length
                 ))
             .orElse("");
    `
    },

    {
    question: "Java 8: Join List of Strings",
    answer: "Frequently asked to test Collectors.joining(). Useful when generating CSV values or concatenated output.",
    code: `
    String result =
        names.stream()
             .collect(
                 Collectors.joining(", ")
             );
    
    System.out.println(result);
    `
    },
    
    {
    question: "Java 8: Find Top 3 Highest Salaries",
    answer: "Sort in descending order and limit the result.",
    code: `
    List<Employee> result =
        employees.stream()
                 .sorted(
                     Comparator.comparing(
                         Employee::getSalary)
                     .reversed())
                 .limit(3)
                 .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Find Average Salary By Department",
    answer: "Common groupingBy interview problem.",
    code: `
    Map<String, Double> result =
        employees.stream()
                 .collect(
                     Collectors.groupingBy(
                         Employee::getDepartment,
                         Collectors.averagingDouble(
                             Employee::getSalary
                         )
                     )
                 );
    `
    },
    
    {
    question: "Java 8: Find Most Frequent Element",
    answer: "First count frequencies, then find the maximum entry.",
    code: `
    String result =
        names.stream()
             .collect(
                 Collectors.groupingBy(
                     Function.identity(),
                     Collectors.counting()
                 ))
             .entrySet()
             .stream()
             .max(
                 Map.Entry.comparingByValue()
             )
             .map(Map.Entry::getKey)
             .orElse(null);
    `
    },
    
    {
    question: "Java 8: Find First Repeated Element",
    answer: "Uses HashSet with stream filtering.",
    code: `
    Set<Integer> seen = new HashSet<>();
    
    Integer result =
        numbers.stream()
               .filter(n -> !seen.add(n))
               .findFirst()
               .orElse(null);
    `
    },
    
    {
    question: "Java 8: Find Last Element In Stream",
    answer: "A common interview trick question because streams are forward-only.",
    code: `
    Integer last =
        numbers.stream()
               .reduce((first, second) -> second)
               .orElse(null);
    `
    },
    
    {
    question: "Java 8: Merge Two Lists",
    answer: "Uses Stream.concat().",
    code: `
    List<Integer> merged =
        Stream.concat(
                list1.stream(),
                list2.stream())
              .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Convert All Strings To Uppercase",
    answer: "Simple map() transformation question.",
    code: `
    List<String> result =
        names.stream()
             .map(String::toUpperCase)
             .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Filter Null Values",
    answer: "Very common real-world stream usage.",
    code: `
    List<String> result =
        names.stream()
             .filter(Objects::nonNull)
             .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Sort Custom Objects",
    answer: "One of the most frequently asked Java 8 coding problems.",
    code: `
    List<Employee> result =
        employees.stream()
                 .sorted(
                     Comparator.comparing(
                         Employee::getName
                     ))
                 .collect(Collectors.toList());
    `
    },

    {
    question: "Java 8: Find Unique Characters In String",
    answer: "Convert the string into a stream of characters, group them and keep only characters that appear once.",
    code: `
    List<Character> result =
        str.chars()
           .mapToObj(c -> (char)c)
           .collect(
               Collectors.groupingBy(
                   Function.identity(),
                   LinkedHashMap::new,
                   Collectors.counting()
               ))
           .entrySet()
           .stream()
           .filter(e -> e.getValue() == 1)
           .map(Map.Entry::getKey)
           .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Flatten Nested Lists",
    answer: "A very common flatMap() interview question.",
    code: `
    List<Integer> result =
        listOfLists.stream()
                   .flatMap(List::stream)
                   .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Find Employee With Maximum Age",
    answer: "Similar to highest salary questions but verifies Comparator knowledge.",
    code: `
    Employee employee =
        employees.stream()
                 .max(
                     Comparator.comparing(
                         Employee::getAge
                     ))
                 .orElse(null);
    `
    },
    
    {
    question: "Java 8: Find Employee Names Starting With A",
    answer: "Simple filter and map operation.",
    code: `
    List<String> result =
        employees.stream()
                 .map(Employee::getName)
                 .filter(name ->
                     name.startsWith("A"))
                 .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Sort Map By Value",
    answer: "A common interview favorite because Map does not provide direct value sorting.",
    code: `
    Map<String,Integer> result =
        map.entrySet()
           .stream()
           .sorted(
               Map.Entry.comparingByValue()
           )
           .collect(
               Collectors.toMap(
                   Map.Entry::getKey,
                   Map.Entry::getValue,
                   (a,b) -> a,
                   LinkedHashMap::new
               )
           );
    `
    },
    
    {
    question: "Java 8: Difference Between map() and flatMap() Through Code",
    answer: "One of the most frequently asked Java 8 interview topics.",
    code: `
    List<List<String>> names =
        Arrays.asList(
            Arrays.asList("A","B"),
            Arrays.asList("C","D")
        );
    
    List<String> result =
        names.stream()
             .flatMap(List::stream)
             .collect(Collectors.toList());
    `
    },
    
    {
    question: "Java 8: Create Custom Collector",
    answer: "Senior interviews sometimes test Collector understanding.",
    code: `
    String result =
        names.stream()
             .collect(
                 Collector.of(
                     StringBuilder::new,
                     StringBuilder::append,
                     StringBuilder::append,
                     StringBuilder::toString
                 )
             );
    `
    },
    
    {
    question: "Java 8: Multi-Level Grouping",
    answer: "Group employees by department and then by designation.",
    code: `
    Map<String,
        Map<String,List<Employee>>> result =
    
    employees.stream()
             .collect(
                 Collectors.groupingBy(
                     Employee::getDepartment,
                     Collectors.groupingBy(
                         Employee::getDesignation
                     )
                 )
             );
    `
    },
    
    {
    question: "Java 8: Find Nth Highest Salary",
    answer: "Very common senior Java interview problem.",
    code: `
    Employee employee =
        employees.stream()
                 .sorted(
                     Comparator.comparing(
                         Employee::getSalary)
                     .reversed())
                 .skip(n - 1)
                 .findFirst()
                 .orElse(null);
    `
    },
    
    {
    question: "Java 8: Department Wise Highest Paid Employee",
    answer: "One of the most realistic employee analytics questions asked in interviews.",
    code: `
    Map<String, Optional<Employee>> result =
    
    employees.stream()
             .collect(
                 Collectors.groupingBy(
                     Employee::getDepartment,
                     Collectors.maxBy(
                         Comparator.comparing(
                             Employee::getSalary
                         )
                     )
                 )
             );
    `
    },

    {
    question: "Stream API: Find Department With Highest Average Salary",
    answer: "A very common architect-level Stream question. First calculate average salary per department, then find the department with the highest average.",
    code: `
    Map.Entry<String, Double> result =
    
    employees.stream()
             .collect(
                 Collectors.groupingBy(
                     Employee::getDepartment,
                     Collectors.averagingDouble(
                         Employee::getSalary
                     )
                 )
             )
             .entrySet()
             .stream()
             .max(Map.Entry.comparingByValue())
             .orElse(null);
    `
    },
    
    {
    question: "Stream API: Top 3 Salaries Per Department",
    answer: "A popular senior-level question because it combines grouping and sorting.",
    code: `
    Map<String, List<Employee>> result =
    
    employees.stream()
             .collect(
                 Collectors.groupingBy(
                     Employee::getDepartment
                 )
             )
             .entrySet()
             .stream()
             .collect(
                 Collectors.toMap(
                     Map.Entry::getKey,
                     e -> e.getValue()
                           .stream()
                           .sorted(
                               Comparator.comparing(
                                   Employee::getSalary
                               ).reversed()
                           )
                           .limit(3)
                           .collect(Collectors.toList())
                 )
             );
    `
    },
    
    {
    question: "Stream API: Find Total Revenue Per Month",
    answer: "Very realistic business reporting problem.",
    code: `
    Map<YearMonth, Double> revenue =
    
    orders.stream()
          .collect(
              Collectors.groupingBy(
                  order ->
                      YearMonth.from(
                          order.getDate()
                      ),
                  Collectors.summingDouble(
                      Order::getAmount
                  )
              )
          );
    `
    },
    
    {
    question: "Stream API: Customer Purchase Aggregation",
    answer: "Calculate total spending by each customer.",
    code: `
    Map<String, Double> result =
    
    orders.stream()
          .collect(
              Collectors.groupingBy(
                  Order::getCustomerName,
                  Collectors.summingDouble(
                      Order::getAmount
                  )
              )
          );
    `
    },
    
    {
    question: "Stream API: Product Sales Summary",
    answer: "Frequently asked in reporting systems.",
    code: `
    Map<String, Long> result =
    
    orders.stream()
          .collect(
              Collectors.groupingBy(
                  Order::getProductName,
                  Collectors.counting()
              )
          );
    `
    },
    
    {
    question: "Stream API: Employee Hierarchy Processing",
    answer: "Find all employees under a particular manager.",
    code: `
    List<Employee> result =
    
    employees.stream()
             .filter(emp ->
                 emp.getManagerId()
                    .equals(managerId))
             .collect(Collectors.toList());
    `
    },
    
    {
    question: "Stream API: Transaction Amount Summary",
    answer: "Uses summary statistics collector.",
    code: `
    DoubleSummaryStatistics stats =
    
    transactions.stream()
                .collect(
                    Collectors.summarizingDouble(
                        Transaction::getAmount
                    )
                );
    
    System.out.println(stats.getMax());
    System.out.println(stats.getMin());
    System.out.println(stats.getAverage());
    System.out.println(stats.getSum());
    `
    },
    
    {
    question: "Stream API: Duplicate Transaction Detection",
    answer: "A real banking-style interview problem.",
    code: `
    Set<String> seen = new HashSet<>();
    
    List<Transaction> duplicates =
    
    transactions.stream()
                .filter(tx ->
                    !seen.add(
                        tx.getTransactionId()
                    )
                )
                .collect(Collectors.toList());
    `
    },
    
    {
    question: "Stream API: Basic Fraud Detection",
    answer: "Find transactions greater than a threshold amount.",
    code: `
    List<Transaction> suspicious =
    
    transactions.stream()
                .filter(tx ->
                    tx.getAmount() > 100000
                )
                .collect(Collectors.toList());
    `
    },
    
    {
    question: "Stream API: Generate Business Report",
    answer: "Department-wise employee count and average salary in a single report.",
    code: `
    Map<String, Map<String,Object>> report =
    
    employees.stream()
             .collect(
                 Collectors.groupingBy(
                     Employee::getDepartment,
                     Collectors.collectingAndThen(
                         Collectors.toList(),
                         list -> {
    
                             Map<String,Object> data =
                                 new HashMap<>();
    
                             data.put(
                                 "count",
                                 list.size()
                             );
    
                             data.put(
                                 "avgSalary",
                                 list.stream()
                                     .mapToDouble(
                                         Employee::getSalary
                                     )
                                     .average()
                                     .orElse(0)
                             );
    
                             return data;
                         }
                     )
                 )
             );
    `
    },

    {
    question: "Stream API: Nth Highest Salary Per Department",
    answer: "A very common senior Java interview question combining grouping, sorting and stream transformations.",
    code: `
    Map<String, Employee> result =
    
    employees.stream()
             .collect(
                 Collectors.groupingBy(
                     Employee::getDepartment,
                     Collectors.collectingAndThen(
                         Collectors.toList(),
                         list -> list.stream()
                                     .sorted(
                                         Comparator.comparing(
                                             Employee::getSalary
                                         ).reversed()
                                     )
                                     .skip(n - 1)
                                     .findFirst()
                                     .orElse(null)
                     )
                 )
             );
    `
    },
    
    {
    question: "Stream API: Revenue Trend Analysis",
    answer: "Identify monthly revenue growth trends from transaction data.",
    code: `
    Map<YearMonth, Double> revenue =
    
    transactions.stream()
                .collect(
                    Collectors.groupingBy(
                        tx -> YearMonth.from(
                            tx.getDate()
                        ),
                        TreeMap::new,
                        Collectors.summingDouble(
                            Transaction::getAmount
                        )
                    )
                );
    `
    },
    
    {
    question: "Stream API: Find Top 5 Customers By Spending",
    answer: "A common analytics question in e-commerce and banking domains.",
    code: `
    List<Map.Entry<String, Double>> result =
    
    orders.stream()
          .collect(
              Collectors.groupingBy(
                  Order::getCustomerName,
                  Collectors.summingDouble(
                      Order::getAmount
                  )
              )
          )
          .entrySet()
          .stream()
          .sorted(
              Map.Entry.<String,Double>
              comparingByValue()
              .reversed()
          )
          .limit(5)
          .collect(Collectors.toList());
    `
    },
    
    {
    question: "Stream API: Customer Segmentation",
    answer: "Categorize customers based on total spending.",
    code: `
    Map<String, String> result =
    
    orders.stream()
          .collect(
              Collectors.groupingBy(
                  Order::getCustomerName,
                  Collectors.summingDouble(
                      Order::getAmount
                  )
              )
          )
          .entrySet()
          .stream()
          .collect(
              Collectors.toMap(
                  Map.Entry::getKey,
                  e -> e.getValue() > 100000
                       ? "PREMIUM"
                       : "STANDARD"
              )
          );
    `
    },
    
    {
    question: "Stream API: Product Performance Ranking",
    answer: "Rank products based on total sales volume.",
    code: `
    List<Map.Entry<String, Long>> result =
    
    orders.stream()
          .collect(
              Collectors.groupingBy(
                  Order::getProductName,
                  Collectors.counting()
              )
          )
          .entrySet()
          .stream()
          .sorted(
              Map.Entry.<String,Long>
              comparingByValue()
              .reversed()
          )
          .collect(Collectors.toList());
    `
    },
    
    {
    question: "Stream API: Custom Collector For Comma Separated Output",
    answer: "Tests understanding of Collector internals.",
    code: `
    String result =
    
    names.stream()
         .collect(
             Collector.of(
                 StringBuilder::new,
                 (sb, str) -> {
                     if(sb.length() > 0) {
                         sb.append(",");
                     }
                     sb.append(str);
                 },
                 (sb1, sb2) -> sb1.append(sb2),
                 StringBuilder::toString
             )
         );
    `
    },
    
    {
    question: "Stream API: Parallel Stream Processing",
    answer: "Frequently discussed in senior interviews. Parallel streams should be used only after measuring performance benefits.",
    code: `
    long count =
    
    employees.parallelStream()
             .filter(emp ->
                 emp.getSalary() > 100000
             )
             .count();
    `
    },
    
    {
    question: "Stream API: Large Dataset Aggregation",
    answer: "Calculate total transaction amount efficiently.",
    code: `
    double total =
    
    transactions.stream()
                .mapToDouble(
                    Transaction::getAmount
                )
                .sum();
    `
    },
    
    {
    question: "Stream API: Find Highest Revenue Product",
    answer: "A realistic reporting problem.",
    code: `
    String product =
    
    orders.stream()
          .collect(
              Collectors.groupingBy(
                  Order::getProductName,
                  Collectors.summingDouble(
                      Order::getAmount
                  )
              )
          )
          .entrySet()
          .stream()
          .max(
              Map.Entry.comparingByValue()
          )
          .map(Map.Entry::getKey)
          .orElse(null);
    `
    },
    
    {
    question: "Stream API: Rolling Average Calculation",
    answer: "Interviewers sometimes ask how rolling averages can be implemented. Stream API alone is not ideal, but basic logic can still be demonstrated.",
    code: `
    List<Double> rollingAverage =
    
    IntStream.range(2, values.size())
             .mapToObj(i ->
                 (
                     values.get(i) +
                     values.get(i - 1) +
                     values.get(i - 2)
                 ) / 3.0
             )
             .collect(Collectors.toList());
    `
    },

    {
    question: "Collections: Implement LRU Cache Using LinkedHashMap",
    answer: "One of the most frequently asked collection design questions. LinkedHashMap already maintains insertion/access order, making LRU implementation simple.",
    code: `
    class LRUCache<K,V>
            extends LinkedHashMap<K,V> {
    
        private final int capacity;
    
        public LRUCache(int capacity) {
            super(capacity, 0.75f, true);
            this.capacity = capacity;
        }
    
        @Override
        protected boolean removeEldestEntry(
                Map.Entry<K,V> eldest) {
    
            return size() > capacity;
        }
    }
    `
    },
    
    {
    question: "Collections: Design a Custom HashMap",
    answer: "Senior interviews often ask how HashMap works internally. Start with bucket arrays and linked list collision handling.",
    code: `
    class Entry<K,V> {
    
        K key;
        V value;
        Entry<K,V> next;
    
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    `
    },
    
    {
    question: "Collections: Find Top K Frequent Elements",
    answer: "A common combination of HashMap and PriorityQueue.",
    code: `
    Map<Integer,Integer> frequency =
            new HashMap<>();
    
    for(int num : nums) {
        frequency.put(
            num,
            frequency.getOrDefault(num,0)+1
        );
    }
    
    PriorityQueue<Integer> pq =
        new PriorityQueue<>(
            (a,b) ->
                frequency.get(a)
                - frequency.get(b)
        );
    `
    },
    
    {
    question: "Collections: Frequency Counter",
    answer: "The foundation of many interview problems.",
    code: `
    Map<String, Integer> frequency =
            new HashMap<>();
    
    for(String word : words) {
    
        frequency.put(
            word,
            frequency.getOrDefault(
                word,
                0
            ) + 1
        );
    }
    `
    },
    
    {
    question: "Collections: Priority Queue For Highest Salary",
    answer: "PriorityQueue is commonly used for Top-K problems.",
    code: `
    PriorityQueue<Employee> pq =
    
    new PriorityQueue<>(
        Comparator.comparing(
            Employee::getSalary
        ).reversed()
    );
    
    pq.addAll(employees);
    
    Employee highest = pq.poll();
    `
    },
    
    {
    question: "Collections: LinkedHashMap For Insertion Order",
    answer: "LinkedHashMap preserves insertion order unlike HashMap.",
    code: `
    Map<Integer,String> map =
        new LinkedHashMap<>();
    
    map.put(3,"C");
    map.put(1,"A");
    map.put(2,"B");
    
    System.out.println(map);
    `
    },
    
    {
    question: "Collections: ConcurrentHashMap Example",
    answer: "Frequently asked in Java concurrency interviews.",
    code: `
    Map<Integer,String> map =
        new ConcurrentHashMap<>();
    
    map.put(1,"A");
    
    map.forEach(
        (k,v) -> {
            if(k == 1) {
                map.put(2,"B");
            }
        }
    );
    `
    },
    
    {
    question: "Collections: Handle HashMap Collisions",
    answer: "Interviewers often ask what happens when multiple keys generate the same hash.",
    code: `
    class Employee {
    
        private int id;
    
        @Override
        public int hashCode() {
            return 1;
        }
    }
    `
    },
    
    {
    question: "Collections: Sort Data Using TreeMap",
    answer: "TreeMap automatically sorts entries by key.",
    code: `
    Map<Integer,String> map =
        new TreeMap<>();
    
    map.put(3,"C");
    map.put(1,"A");
    map.put(2,"B");
    
    System.out.println(map);
    `
    },
    
    {
    question: "Collections: Custom Comparator Example",
    answer: "A very common Java interview topic.",
    code: `
    employees.sort(
        Comparator.comparing(
            Employee::getSalary
        )
    );
    
    employees.sort(
        Comparator.comparing(
            Employee::getSalary
        ).reversed()
    );
    `
    },

    {
    question: "Collections: Merge K Sorted Lists",
    answer: "A classic problem that uses PriorityQueue. Instead of merging lists one by one, always pick the smallest available element.",
    code: `
    PriorityQueue<Node> pq =
        new PriorityQueue<>(
            Comparator.comparingInt(
                Node::getValue
            )
        );
    
    for(Node node : lists) {
        if(node != null) {
            pq.offer(node);
        }
    }
    `
    },
    
    {
    question: "Collections: Intersection Of Two Arrays",
    answer: "HashSet provides O(1) average lookup time and significantly improves performance over nested loops.",
    code: `
    Set<Integer> set =
        Arrays.stream(arr1)
              .boxed()
              .collect(Collectors.toSet());
    
    List<Integer> result =
    
    Arrays.stream(arr2)
          .filter(set::contains)
          .boxed()
          .collect(Collectors.toList());
    `
    },
    
    {
    question: "Collections: Union Of Two Arrays",
    answer: "HashSet automatically removes duplicates while combining collections.",
    code: `
    Set<Integer> result =
        new HashSet<>();
    
    for(int num : arr1) {
        result.add(num);
    }
    
    for(int num : arr2) {
        result.add(num);
    }
    `
    },
    
    {
    question: "Collections: Sliding Window Maximum",
    answer: "A very popular interview problem. Deque provides O(n) solution compared to O(n*k) brute force.",
    code: `
    Deque<Integer> deque =
        new LinkedList<>();
    
    for(int i = 0; i < nums.length; i++) {
    
        while(!deque.isEmpty() &&
              deque.peekFirst() <= i - k) {
    
            deque.pollFirst();
        }
    
        while(!deque.isEmpty() &&
              nums[deque.peekLast()] <= nums[i]) {
    
            deque.pollLast();
        }
    
        deque.offerLast(i);
    }
    `
    },
    
    {
    question: "Collections: Moving Average",
    answer: "Queue is commonly used for moving average calculations in streaming systems.",
    code: `
    Queue<Integer> queue =
        new LinkedList<>();
    
    double sum = 0;
    
    queue.offer(value);
    sum += value;
    
    if(queue.size() > windowSize) {
        sum -= queue.poll();
    }
    
    double average =
        sum / queue.size();
    `
    },
    
    {
    question: "Collections: Implement Queue Using Two Stacks",
    answer: "One of the most common collection design questions.",
    code: `
    Stack<Integer> input =
        new Stack<>();
    
    Stack<Integer> output =
        new Stack<>();
    
    public int dequeue() {
    
        if(output.isEmpty()) {
    
            while(!input.isEmpty()) {
                output.push(input.pop());
            }
        }
    
        return output.pop();
    }
    `
    },
    
    {
    question: "Collections: Implement Stack Using Two Queues",
    answer: "A favorite interview problem that tests understanding of collection behavior.",
    code: `
    Queue<Integer> q1 =
        new LinkedList<>();
    
    Queue<Integer> q2 =
        new LinkedList<>();
    
    public void push(int value) {
    
        q2.offer(value);
    
        while(!q1.isEmpty()) {
            q2.offer(q1.poll());
        }
    
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
    }
    `
    },
    
    {
    question: "Collections: Create Custom Iterator",
    answer: "Frequently asked to check understanding of Iterator design.",
    code: `
    class CustomIterator
            implements Iterator<Integer> {
    
        private List<Integer> data;
        private int index = 0;
    
        public boolean hasNext() {
            return index < data.size();
        }
    
        public Integer next() {
            return data.get(index++);
        }
    }
    `
    },
    
    {
    question: "Collections: Explain Fail-Fast Iterator Through Code",
    answer: "Interviewers often ask why ConcurrentModificationException occurs.",
    code: `
    List<String> list =
        new ArrayList<>();
    
    list.add("A");
    list.add("B");
    
    for(String value : list) {
    
        list.add("C");
    }
    `
    },
    
    {
    question: "Collections: Producer Consumer Using BlockingQueue",
    answer: "A real-world concurrent collection problem frequently asked in senior interviews.",
    code: `
    BlockingQueue<Integer> queue =
        new ArrayBlockingQueue<>(10);
    
    Thread producer =
        new Thread(() -> {
    
            try {
                queue.put(100);
            }
            catch(Exception e) {
            }
        });
    
    Thread consumer =
        new Thread(() -> {
    
            try {
                System.out.println(
                    queue.take()
                );
            }
            catch(Exception e) {
            }
        });
    `
    },

    {
    question: "Data Structures: Two Sum",
    answer: "Probably the most famous coding interview problem. Use HashMap to achieve O(n) time complexity instead of O(n²).",
    code: `
    public int[] twoSum(int[] nums, int target) {
    
        Map<Integer,Integer> map =
            new HashMap<>();
    
        for(int i = 0; i < nums.length; i++) {
    
            int complement =
                target - nums[i];
    
            if(map.containsKey(complement)) {
    
                return new int[] {
                    map.get(complement),
                    i
                };
            }
    
            map.put(nums[i], i);
        }
    
        return new int[] {-1,-1};
    }
    `
    },
    
    {
    question: "Data Structures: Best Time To Buy And Sell Stock",
    answer: "Track the minimum price seen so far and calculate maximum profit at every step.",
    code: `
    public int maxProfit(int[] prices) {
    
        int minPrice =
            Integer.MAX_VALUE;
    
        int maxProfit = 0;
    
        for(int price : prices) {
    
            minPrice =
                Math.min(minPrice, price);
    
            maxProfit =
                Math.max(
                    maxProfit,
                    price - minPrice
                );
        }
    
        return maxProfit;
    }
    `
    },
    
    {
    question: "Data Structures: Move Zeroes",
    answer: "Move all zeroes to the end while maintaining the order of non-zero elements.",
    code: `
    public void moveZeroes(int[] nums) {
    
        int index = 0;
    
        for(int num : nums) {
    
            if(num != 0) {
                nums[index++] = num;
            }
        }
    
        while(index < nums.length) {
            nums[index++] = 0;
        }
    }
    `
    },
    
    {
    question: "Data Structures: Rotate Array",
    answer: "A common interview solution uses array reversal.",
    code: `
    private void reverse(
            int[] nums,
            int start,
            int end) {
    
        while(start < end) {
    
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
    
            start++;
            end--;
        }
    }
    `
    },
    
    {
    question: "Data Structures: Maximum Subarray",
    answer: "Kadane's Algorithm. One of the most important array interview questions.",
    code: `
    public int maxSubArray(int[] nums) {
    
        int current = nums[0];
        int max = nums[0];
    
        for(int i = 1; i < nums.length; i++) {
    
            current =
                Math.max(
                    nums[i],
                    current + nums[i]
                );
    
            max =
                Math.max(max, current);
        }
    
        return max;
    }
    `
    },
    
    {
    question: "Data Structures: Product Of Array Except Self",
    answer: "Solve without division using prefix and suffix products.",
    code: `
    public int[] productExceptSelf(
            int[] nums) {
    
        int n = nums.length;
    
        int[] result =
            new int[n];
    
        result[0] = 1;
    
        for(int i = 1; i < n; i++) {
    
            result[i] =
                result[i - 1] * nums[i - 1];
        }
    
        int suffix = 1;
    
        for(int i = n - 1; i >= 0; i--) {
    
            result[i] *= suffix;
    
            suffix *= nums[i];
        }
    
        return result;
    }
    `
    },
    
    {
    question: "Data Structures: Container With Most Water",
    answer: "Classic two-pointer optimization problem.",
    code: `
    public int maxArea(int[] height) {
    
        int left = 0;
        int right =
            height.length - 1;
    
        int maxArea = 0;
    
        while(left < right) {
    
            int area =
                Math.min(
                    height[left],
                    height[right]
                ) * (right - left);
    
            maxArea =
                Math.max(maxArea, area);
    
            if(height[left] <
               height[right]) {
    
                left++;
            } else {
                right--;
            }
        }
    
        return maxArea;
    }
    `
    },
    
    {
    question: "Data Structures: Remove Duplicates From Sorted Array",
    answer: "Two-pointer technique is the optimal solution.",
    code: `
    public int removeDuplicates(
            int[] nums) {
    
        int index = 1;
    
        for(int i = 1;
            i < nums.length;
            i++) {
    
            if(nums[i] !=
               nums[i - 1]) {
    
                nums[index++] =
                    nums[i];
            }
        }
    
        return index;
    }
    `
    },
    
    {
    question: "Data Structures: Majority Element",
    answer: "Boyer-Moore Voting Algorithm. Very popular interview question.",
    code: `
    public int majorityElement(
            int[] nums) {
    
        int candidate = 0;
        int count = 0;
    
        for(int num : nums) {
    
            if(count == 0) {
                candidate = num;
            }
    
            count +=
                (num == candidate)
                ? 1
                : -1;
        }
    
        return candidate;
    }
    `
    },
    
    {
    question: "Data Structures: First Missing Positive",
    answer: "One of the toughest array interview questions. Uses index placement strategy.",
    code: `
    public int firstMissingPositive(
            int[] nums) {
    
        int n = nums.length;
    
        for(int i = 0; i < n; i++) {
    
            while(
                nums[i] > 0 &&
                nums[i] <= n &&
                nums[nums[i]-1] != nums[i]
            ) {
    
                int temp =
                    nums[nums[i]-1];
    
                nums[nums[i]-1] =
                    nums[i];
    
                nums[i] = temp;
            }
        }
    
        for(int i = 0; i < n; i++) {
    
            if(nums[i] != i + 1) {
                return i + 1;
            }
        }
    
        return n + 1;
    }
    `
    },

    {
    question: "Data Structures: Longest Substring Without Repeating Characters",
    answer: "One of the most popular sliding window problems. Use a HashSet to maintain the current window.",
    code: `
    public int lengthOfLongestSubstring(
            String s) {
    
        Set<Character> set =
            new HashSet<>();
    
        int left = 0;
        int max = 0;
    
        for(int right = 0;
            right < s.length();
            right++) {
    
            while(
                set.contains(
                    s.charAt(right)
                )
            ) {
                set.remove(
                    s.charAt(left++)
                );
            }
    
            set.add(
                s.charAt(right)
            );
    
            max = Math.max(
                max,
                right - left + 1
            );
        }
    
        return max;
    }
    `
    },
    
    {
    question: "Data Structures: Longest Palindromic Substring",
    answer: "Expand around center. Much simpler to explain in interviews than Dynamic Programming.",
    code: `
    private int expand(
            String s,
            int left,
            int right) {
    
        while(
            left >= 0 &&
            right < s.length() &&
            s.charAt(left) ==
            s.charAt(right)
        ) {
            left--;
            right++;
        }
    
        return right - left - 1;
    }
    `
    },
    
    {
    question: "Data Structures: Valid Anagram",
    answer: "A very common string interview question.",
    code: `
    public boolean isAnagram(
            String s,
            String t) {
    
        char[] arr1 =
            s.toCharArray();
    
        char[] arr2 =
            t.toCharArray();
    
        Arrays.sort(arr1);
        Arrays.sort(arr2);
    
        return Arrays.equals(
            arr1,
            arr2
        );
    }
    `
    },
    
    {
    question: "Data Structures: String Compression",
    answer: "Compress aaabbcc into a3b2c2.",
    code: `
    public String compress(
            String str) {
    
        StringBuilder sb =
            new StringBuilder();
    
        int count = 1;
    
        for(int i = 1;
            i <= str.length();
            i++) {
    
            if(
                i < str.length() &&
                str.charAt(i) ==
                str.charAt(i - 1)
            ) {
                count++;
            } else {
    
                sb.append(
                    str.charAt(i - 1)
                );
    
                sb.append(count);
    
                count = 1;
            }
        }
    
        return sb.toString();
    }
    `
    },
    
    {
    question: "Data Structures: Minimum Window Substring",
    answer: "One of the most famous hard-level sliding window interview questions.",
    code: `
    Map<Character,Integer> target =
        new HashMap<>();
    
    for(char ch : t.toCharArray()) {
        target.put(
            ch,
            target.getOrDefault(
                ch,
                0
            ) + 1
        );
    }
    `
    },
    
    {
    question: "Linked List: Reverse Linked List",
    answer: "Probably the most frequently asked linked list question.",
    code: `
    public ListNode reverse(
            ListNode head) {
    
        ListNode prev = null;
    
        while(head != null) {
    
            ListNode next =
                head.next;
    
            head.next = prev;
    
            prev = head;
            head = next;
        }
    
        return prev;
    }
    `
    },
    
    {
    question: "Linked List: Detect Cycle",
    answer: "Uses Floyd's Slow and Fast Pointer algorithm.",
    code: `
    public boolean hasCycle(
            ListNode head) {
    
        ListNode slow = head;
        ListNode fast = head;
    
        while(
            fast != null &&
            fast.next != null
        ) {
    
            slow = slow.next;
            fast = fast.next.next;
    
            if(slow == fast) {
                return true;
            }
        }
    
        return false;
    }
    `
    },
    
    {
    question: "Linked List: Merge Two Sorted Lists",
    answer: "Classic linked list merge problem.",
    code: `
    public ListNode merge(
            ListNode l1,
            ListNode l2) {
    
        ListNode dummy =
            new ListNode(0);
    
        ListNode current =
            dummy;
    
        while(
            l1 != null &&
            l2 != null
        ) {
    
            if(l1.val < l2.val) {
    
                current.next = l1;
                l1 = l1.next;
            } else {
    
                current.next = l2;
                l2 = l2.next;
            }
    
            current = current.next;
        }
    
        return dummy.next;
    }
    `
    },
    
    {
    question: "Linked List: Find Middle Node",
    answer: "Uses slow and fast pointers.",
    code: `
    public ListNode middleNode(
            ListNode head) {
    
        ListNode slow = head;
        ListNode fast = head;
    
        while(
            fast != null &&
            fast.next != null
        ) {
    
            slow = slow.next;
            fast = fast.next.next;
        }
    
        return slow;
    }
    `
    },
    
    {
    question: "Linked List: Remove Nth Node From End",
    answer: "A common two-pointer interview problem.",
    code: `
    public ListNode removeNth(
            ListNode head,
            int n) {
    
        ListNode dummy =
            new ListNode(0);
    
        dummy.next = head;
    
        ListNode first =
            dummy;
    
        ListNode second =
            dummy;
    
        for(int i = 0;
            i <= n;
            i++) {
    
            first = first.next;
        }
    
        while(first != null) {
    
            first = first.next;
            second = second.next;
        }
    
        second.next =
            second.next.next;
    
        return dummy.next;
    }
    `
    },

    {
    question: "Stack: Valid Parentheses",
    answer: "One of the most frequently asked stack problems. Push opening brackets onto the stack and verify matching closing brackets.",
    code: `
    public boolean isValid(String s) {
    
        Stack<Character> stack =
            new Stack<>();
    
        for(char ch : s.toCharArray()) {
    
            if(ch == '(' ||
               ch == '{' ||
               ch == '[') {
    
                stack.push(ch);
            }
            else {
    
                if(stack.isEmpty()) {
                    return false;
                }
    
                char top = stack.pop();
    
                if((ch == ')' && top != '(') ||
                   (ch == '}' && top != '{') ||
                   (ch == ']' && top != '[')) {
    
                    return false;
                }
            }
        }
    
        return stack.isEmpty();
    }
    `
    },
    
    {
    question: "Stack: Design Min Stack",
    answer: "Support push(), pop() and getMin() in O(1) time.",
    code: `
    class MinStack {
    
        Stack<Integer> stack =
            new Stack<>();
    
        Stack<Integer> minStack =
            new Stack<>();
    
        public void push(int val) {
    
            stack.push(val);
    
            if(minStack.isEmpty() ||
               val <= minStack.peek()) {
    
                minStack.push(val);
            }
        }
    
        public int getMin() {
            return minStack.peek();
        }
    }
    `
    },
    
    {
    question: "Stack: Next Greater Element",
    answer: "A classic monotonic stack problem.",
    code: `
    public int[] nextGreater(int[] nums) {
    
        int[] result =
            new int[nums.length];
    
        Stack<Integer> stack =
            new Stack<>();
    
        for(int i = nums.length - 1;
            i >= 0;
            i--) {
    
            while(!stack.isEmpty() &&
                  stack.peek() <= nums[i]) {
    
                stack.pop();
            }
    
            result[i] =
                stack.isEmpty()
                ? -1
                : stack.peek();
    
            stack.push(nums[i]);
        }
    
        return result;
    }
    `
    },
    
    {
    question: "Queue: Design Circular Queue",
    answer: "Frequently asked to test queue fundamentals and modular arithmetic.",
    code: `
    class CircularQueue {
    
        private int[] queue;
        private int front;
        private int rear;
        private int size;
    
        public CircularQueue(int capacity) {
    
            queue = new int[capacity];
        }
    
        public void enqueue(int value) {
    
            rear =
                (rear + 1)
                % queue.length;
    
            queue[rear] = value;
    
            size++;
        }
    }
    `
    },
    
    {
    question: "Queue: Sliding Window Maximum",
    answer: "A very popular interview question solved using Deque.",
    code: `
    Deque<Integer> deque =
        new LinkedList<>();
    
    for(int i = 0;
        i < nums.length;
        i++) {
    
        while(!deque.isEmpty() &&
              deque.peekFirst() <= i - k) {
    
            deque.pollFirst();
        }
    
        while(!deque.isEmpty() &&
              nums[deque.peekLast()]
              <= nums[i]) {
    
            deque.pollLast();
        }
    
        deque.offerLast(i);
    }
    `
    },
    
    {
    question: "Trees: Binary Tree Level Order Traversal",
    answer: "Breadth-First Search using a queue.",
    code: `
    public List<List<Integer>>
    levelOrder(TreeNode root) {
    
        Queue<TreeNode> queue =
            new LinkedList<>();
    
        queue.offer(root);
    
        while(!queue.isEmpty()) {
    
            int size = queue.size();
    
            for(int i = 0;
                i < size;
                i++) {
    
                TreeNode node =
                    queue.poll();
    
                if(node.left != null) {
                    queue.offer(node.left);
                }
    
                if(node.right != null) {
                    queue.offer(node.right);
                }
            }
        }
    }
    `
    },
    
    {
    question: "Trees: Height Of Binary Tree",
    answer: "One of the most common recursion questions.",
    code: `
    public int height(
            TreeNode root) {
    
        if(root == null) {
            return 0;
        }
    
        return 1 +
               Math.max(
                   height(root.left),
                   height(root.right)
               );
    }
    `
    },
    
    {
    question: "Trees: Validate Binary Search Tree",
    answer: "Every node must satisfy BST constraints.",
    code: `
    public boolean isValidBST(
            TreeNode root,
            long min,
            long max) {
    
        if(root == null) {
            return true;
        }
    
        if(root.val <= min ||
           root.val >= max) {
    
            return false;
        }
    
        return isValidBST(
                   root.left,
                   min,
                   root.val
               )
               &&
               isValidBST(
                   root.right,
                   root.val,
                   max
               );
    }
    `
    },
    
    {
    question: "Trees: Lowest Common Ancestor",
    answer: "A very common tree interview question.",
    code: `
    public TreeNode lca(
            TreeNode root,
            TreeNode p,
            TreeNode q) {
    
        if(root == null ||
           root == p ||
           root == q) {
    
            return root;
        }
    
        TreeNode left =
            lca(root.left, p, q);
    
        TreeNode right =
            lca(root.right, p, q);
    
        if(left != null &&
           right != null) {
    
            return root;
        }
    
        return left != null
               ? left
               : right;
    }
    `
    },
    
    {
    question: "Trees: Diameter Of Binary Tree",
    answer: "Diameter is the longest path between any two nodes.",
    code: `
    int diameter = 0;
    
    public int depth(
            TreeNode root) {
    
        if(root == null) {
            return 0;
        }
    
        int left =
            depth(root.left);
    
        int right =
            depth(root.right);
    
        diameter =
            Math.max(
                diameter,
                left + right
            );
    
        return 1 +
               Math.max(
                   left,
                   right
               );
    }
    `
    },

    {
    question: "Graph: Depth First Search (DFS)",
    answer: "DFS explores as deep as possible before backtracking. Usually implemented using recursion or an explicit stack.",
    code: `
    public void dfs(
            int node,
            List<List<Integer>> graph,
            boolean[] visited) {
    
        visited[node] = true;
    
        System.out.print(node + " ");
    
        for(int neighbor :
            graph.get(node)) {
    
            if(!visited[neighbor]) {
    
                dfs(
                    neighbor,
                    graph,
                    visited
                );
            }
        }
    }
    `
    },
    
    {
    question: "Graph: Breadth First Search (BFS)",
    answer: "BFS explores level by level and uses a queue.",
    code: `
    public void bfs(
            int start,
            List<List<Integer>> graph) {
    
        Queue<Integer> queue =
            new LinkedList<>();
    
        boolean[] visited =
            new boolean[
                graph.size()
            ];
    
        queue.offer(start);
    
        visited[start] = true;
    
        while(!queue.isEmpty()) {
    
            int node =
                queue.poll();
    
            System.out.print(
                node + " "
            );
    
            for(int neighbor :
                graph.get(node)) {
    
                if(!visited[neighbor]) {
    
                    visited[neighbor] =
                        true;
    
                    queue.offer(
                        neighbor
                    );
                }
            }
        }
    }
    `
    },
    
    {
    question: "Graph: Detect Cycle In Directed Graph",
    answer: "A common interview problem. Uses DFS with recursion stack tracking.",
    code: `
    public boolean hasCycle(
            int node,
            List<List<Integer>> graph,
            boolean[] visited,
            boolean[] path) {
    
        visited[node] = true;
        path[node] = true;
    
        for(int neighbor :
            graph.get(node)) {
    
            if(!visited[neighbor] &&
               hasCycle(
                   neighbor,
                   graph,
                   visited,
                   path
               )) {
    
                return true;
            }
    
            if(path[neighbor]) {
                return true;
            }
        }
    
        path[node] = false;
    
        return false;
    }
    `
    },
    
    {
    question: "Graph: Topological Sort",
    answer: "Frequently asked when discussing dependency ordering and task scheduling.",
    code: `
    public void topoSort(
            int node,
            List<List<Integer>> graph,
            boolean[] visited,
            Stack<Integer> stack) {
    
        visited[node] = true;
    
        for(int neighbor :
            graph.get(node)) {
    
            if(!visited[neighbor]) {
    
                topoSort(
                    neighbor,
                    graph,
                    visited,
                    stack
                );
            }
        }
    
        stack.push(node);
    }
    `
    },
    
    {
    question: "Dynamic Programming: Climbing Stairs",
    answer: "A classic DP starter problem. Number of ways to reach step n.",
    code: `
    public int climbStairs(
            int n) {
    
        if(n <= 2) {
            return n;
        }
    
        int first = 1;
        int second = 2;
    
        for(int i = 3;
            i <= n;
            i++) {
    
            int current =
                first + second;
    
            first = second;
            second = current;
        }
    
        return second;
    }
    `
    },
    
    {
    question: "Dynamic Programming: House Robber",
    answer: "At every house, decide whether to rob it or skip it.",
    code: `
    public int rob(int[] nums) {
    
        int prev1 = 0;
        int prev2 = 0;
    
        for(int num : nums) {
    
            int temp =
                Math.max(
                    prev1,
                    prev2 + num
                );
    
            prev2 = prev1;
            prev1 = temp;
        }
    
        return prev1;
    }
    `
    },
    
    {
    question: "Dynamic Programming: Coin Change",
    answer: "Find the minimum number of coins required to make a target amount.",
    code: `
    public int coinChange(
            int[] coins,
            int amount) {
    
        int[] dp =
            new int[amount + 1];
    
        Arrays.fill(
            dp,
            amount + 1
        );
    
        dp[0] = 0;
    
        for(int coin : coins) {
    
            for(int i = coin;
                i <= amount;
                i++) {
    
                dp[i] =
                    Math.min(
                        dp[i],
                        dp[i - coin] + 1
                    );
            }
        }
    
        return dp[amount]
               > amount
               ? -1
               : dp[amount];
    }
    `
    },
    
    {
    question: "Dynamic Programming: Longest Increasing Subsequence",
    answer: "One of the most important dynamic programming interview problems.",
    code: `
    public int lengthOfLIS(
            int[] nums) {
    
        int[] dp =
            new int[nums.length];
    
        Arrays.fill(dp, 1);
    
        int max = 1;
    
        for(int i = 1;
            i < nums.length;
            i++) {
    
            for(int j = 0;
                j < i;
                j++) {
    
                if(nums[i] >
                   nums[j]) {
    
                    dp[i] =
                        Math.max(
                            dp[i],
                            dp[j] + 1
                        );
                }
            }
    
            max =
                Math.max(
                    max,
                    dp[i]
                );
        }
    
        return max;
    }
    `
    },
    
    {
    question: "Dynamic Programming: 0/1 Knapsack",
    answer: "One of the most famous DP interview questions.",
    code: `
    public int knapsack(
            int[] weights,
            int[] values,
            int capacity) {
    
        int[][] dp =
            new int[
                weights.length + 1
            ][capacity + 1];
    
        for(int i = 1;
            i <= weights.length;
            i++) {
    
            for(int w = 1;
                w <= capacity;
                w++) {
    
                if(weights[i - 1] <= w) {
    
                    dp[i][w] =
                        Math.max(
                            dp[i - 1][w],
                            values[i - 1]
                            +
                            dp[i - 1][
                                w - weights[i - 1]
                            ]
                        );
                } else {
    
                    dp[i][w] =
                        dp[i - 1][w];
                }
            }
        }
    
        return dp[
            weights.length
        ][capacity];
    }
    `
    },
    
    {
    question: "Dynamic Programming: Explain DP Thinking Pattern",
    answer: "Senior interviewers often ask how to identify a Dynamic Programming problem. Look for overlapping subproblems and optimal substructure. Start with recursion, add memoization, then convert to tabulation if needed.",
    code: `
    Step 1:
    Identify repeating subproblems
    
    Step 2:
    Write recursive solution
    
    Step 3:
    Add memoization
    
    Step 4:
    Convert to bottom-up DP
    
    Step 5:
    Optimize space if possible
    `
    }
    
    ];