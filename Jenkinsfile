pipeline {
  agent any

  stages {

    stage('Clone') {
      steps {
        git 'https://github.com/Nawab-chandio/react-jenkins.git'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t react-app .'
      }
    }

    stage('Run Container') {
      steps {
        sh 'docker run -d -p 3000:80 react-app'
      }
    }

    stage('Run Docker') {
  steps {
    sh 'docker stop react-container || true'
    sh 'docker rm react-container || true'
    sh 'docker run -d -p 3000:80 --name react-container react-app'
  }
}

  }
}