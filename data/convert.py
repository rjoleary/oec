import re

output = open('Testing.js', 'w')

# The columns have the following meaning: "Time", "Train", "FrtLoc", "RearLoc", "Track", "Speed", "Status"
output.write('function getSimulationData() {')
output.write('return [')

input = open('Testing.txt')
for line in input:
    output.write(re.sub(r'(\S+)\s+' * 6 + r'(\S+)', r'["\1","\2","\3","\4","\5","\6","\7"],', line))

output.write('];')
output.write('}')
