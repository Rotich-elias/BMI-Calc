pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sshagent(['your-credential-id']) {
                    sh 'ssh -o StrictHostKeyChecking=no deployer@your_server_ip "cd /var/www/your_site_name && git pull"'
                }
            }
        }
    }
}