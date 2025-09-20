pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sshagent(['jenkinsfirst']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no deployer@192.168.100.65 << EOF
                        cd /var/www/BMI-CALCULATOR
                        git pull
                        sudo systemctl reload nginx
                        EOF
                    '''
                }
            }
        }
    }
}