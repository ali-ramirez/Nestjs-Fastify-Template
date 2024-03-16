const MIN_COVERAGE = 73;

const config = {
  all: true,
  'check-coverage': true,
  branches: MIN_COVERAGE,
  lines: MIN_COVERAGE,
  functions: MIN_COVERAGE,
  statements: MIN_COVERAGE,
  reporter: ["lcov", "json", "text"],
};

module.exports = config;